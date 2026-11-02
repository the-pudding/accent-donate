<script>
	import { getContext } from "svelte";
	import { goto } from "$app/navigation";
	import { resolve } from "$app/paths";
	import Recorder from "$components/Recorder.svelte";
	import Button from "$components/ui/Button.svelte";
	import Checkbox from "$components/ui/Checkbox.svelte";
	import Select from "$components/ui/Select.svelte";
	import fillCopy from "$utils/fill.js";
	import { uploadAudio, saveRow } from "$utils/supabase.js";

	// place: one of copy.places, or undefined on / (shows the place picker)
	let { place } = $props();

	const copy = getContext("copy");
	const { choose, intro, record, questions, submit, thanks } = copy;

	const placeOptions = copy.places.map((d) => ({ value: d.id, label: d.name }));
	const fill = (str) => fillCopy(str, place);

	// split the hed at {name} so the place always starts a new line
	const [hedBefore, hedAfter] = intro.hed.includes("{name}")
		? intro.hed.split("{name}")
		: [intro.hed, null];

	function choosePlace(id) {
		goto(`${resolve("/[place]", { place: id })}/`);
	}

	let audio = $state(null);
	let duration = $state(null);
	let email = $state("");
	let race = $state([]);
	let age = $state(undefined);
	let consent = $state(false);
	let error = $state("");
	let status = $state("idle"); // "idle" | "submitting" | "done"

	function toggleRace(value, checked) {
		race = checked ? [...race, value] : race.filter((d) => d !== value);
	}

	// required: a recording (the recorder rejects anything under 1s) and consent
	const canSubmit = $derived(!!audio && consent && status !== "submitting");
	const missing = $derived(
		!audio ? submit.needsRecording : !consent ? submit.needsConsent : ""
	);

	// the clip already uploaded for this recording, so a retry doesn't upload it twice
	let uploaded = null;

	async function onsubmit(e) {
		e.preventDefault();
		if (!canSubmit) return;
		error = "";
		status = "submitting";

		try {
			if (uploaded?.audio !== audio) {
				uploaded = {
					audio,
					...(await uploadAudio({ audio, place: place.id }))
				};
			}
			await saveRow({
				id: uploaded.id,
				place: place.id,
				audio_path: uploaded.path,
				mime_type: audio.type,
				duration_seconds: duration,
				email: email.trim() || null,
				race,
				age: age || null,
				consent
			});
			status = "done";
			window.scrollTo({ top: 0 });
		} catch (err) {
			console.error(err);
			error = submit.error;
			status = "idle";
		}
	}

	// warn before leaving with a recording that hasn't been sent
	function onbeforeunload(e) {
		if (audio && status !== "done") e.preventDefault();
	}
</script>

<svelte:window {onbeforeunload} />

<svelte:boundary onerror={(e) => console.error(e)}>
	<article>
		{#if !place}
			<header class="intro">
				<h1>{choose.hed}</h1>
			</header>
			<div class="card">
				<div class="field">
					<label for="place">{choose.label}</label>
					<Select
						id="place"
						items={placeOptions}
						placeholder={choose.placeholder}
						onValueChange={choosePlace}
					/>
				</div>
			</div>
		{:else if status === "done"}
			<header class="intro">
				<h1>{fill(thanks.hed)}</h1>
				<p class="dek">{fill(thanks.text)}</p>
			</header>
		{:else}
			<header class="intro">
				<h1>
					{#if hedAfter === null}
						{fill(intro.hed)}
					{:else}
						{fill(hedBefore)}<br /><span class="place">{place.name}</span>{fill(
							hedAfter
						)}
					{/if}
				</h1>
				<p class="dek">{fill(intro.dek)}</p>
			</header>

			<section class="card">
				<p class="step"><span>1</span>{record.prompt}</p>
				<blockquote>{place.sentence}</blockquote>
				<Recorder copy={record} bind:blob={audio} bind:duration />
			</section>

			<form class="card" {onsubmit}>
				<h2 class="step"><span>2</span>{questions.hed}</h2>

				<div class="field">
					<label for="email">{questions.email.label}</label>
					<input
						id="email"
						type="email"
						autocomplete="email"
						placeholder={questions.email.placeholder}
						bind:value={email}
					/>
					<small>{questions.email.hint}</small>
				</div>

				<div class="group">
					<h3>{questions.demographics.hed}</h3>
					<small>{questions.demographics.hint}</small>
				</div>

				<fieldset class="field">
					<legend>{questions.race.label}</legend>
					<div class="options">
						{#each questions.race.options as { value, label } (value)}
							<Checkbox
								labelText={label}
								checked={race.includes(value)}
								onCheckedChange={(checked) => toggleRace(value, checked)}
							/>
						{/each}
					</div>
				</fieldset>

				<div class="field">
					<label for="age">{questions.age.label}</label>
					<Select
						id="age"
						items={questions.age.options}
						placeholder={questions.age.placeholder}
						bind:value={age}
					/>
				</div>

				<div class="field consent">
					<Checkbox
						labelText={questions.consent.label}
						bind:checked={consent}
					/>
				</div>

				{#if error}
					<p class="error" role="alert">{error}</p>
				{/if}

				<Button type="submit" size="lg" class="submit" disabled={!canSubmit}>
					{status === "submitting" ? submit.submitting : submit.button}
				</Button>
				{#if missing}
					<p class="missing">{missing}</p>
				{/if}
			</form>
		{/if}
	</article>
</svelte:boundary>

<style>
	article {
		max-width: 40rem;
		margin: 0 auto;
		padding: 1rem 1rem 6rem;
	}

	.intro {
		margin-bottom: 2.5rem;
		text-align: center;
	}

	h1 {
		font-size: clamp(var(--36px), 7vw, 3.5rem);
		line-height: 1.05;
		margin: 0;
		text-wrap: balance;
	}

	h1 .place {
		white-space: nowrap;
	}

	.dek {
		font-size: var(--20px);
		color: var(--color-fg-light);
		margin: 1.25rem auto 0;
		max-width: 32rem;
		text-wrap: pretty;
	}

	.card {
		background: var(--color-surface);
		border: 1px solid var(--color-gray-800);
		border-radius: var(--radius-lg);
		padding: 2rem 1.5rem;
		margin-top: 1.5rem;
	}

	.step {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin: 0;
		font-family: var(--font-sans);
		font-size: var(--16px);
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.step span {
		display: grid;
		place-items: center;
		flex-shrink: 0;
		width: 1.75rem;
		height: 1.75rem;
		border-radius: 50%;
		background: var(--color-primary);
		color: var(--color-button-fg-primary);
		font-size: var(--14px);
		letter-spacing: 0;
	}

	blockquote {
		margin: 2rem 0 2.5rem;
		padding: 0;
		font-size: clamp(var(--28px), 5vw, var(--36px));
		line-height: 1.2;
		text-align: center;
		text-wrap: balance;
	}

	blockquote::before,
	blockquote::after {
		color: var(--color-primary);
	}

	blockquote::before {
		content: "“";
	}

	blockquote::after {
		content: "”";
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 2rem 0 0;
		padding: 0;
		border: none;
		min-width: 0;
	}

	.card > .field:first-child {
		margin-top: 0;
	}

	label,
	legend {
		font-family: var(--font-sans);
		font-weight: bold;
		padding: 0;
	}

	legend {
		margin-bottom: 0.75rem;
	}

	small {
		font-family: var(--font-sans);
		font-size: var(--14px);
		color: var(--color-fg-light);
	}

	input[type="email"] {
		padding: 0.75rem;
		outline: 1px solid var(--color-border);
	}

	input[type="email"]::placeholder {
		color: var(--color-placeholder);
	}

	input[type="email"]:focus-visible {
		outline: 2px solid var(--color-focus);
		outline-offset: 0;
	}

	.group {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid var(--color-gray-800);
	}

	.group h3 {
		font-size: var(--22px);
		margin: 0 0 0.25rem;
	}

	.options {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
		gap: 0.5rem;
	}

	/* checkbox tiles; the label fills the tile so the whole thing is clickable */
	.options :global(.bits-checkbox),
	.consent :global(.bits-checkbox) {
		gap: 0.75rem;
		padding-left: 0.875rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		transition:
			border-color 0.15s ease,
			background 0.15s ease;
	}

	.options :global(.bits-checkbox:has([data-state="checked"])),
	.consent :global(.bits-checkbox:has([data-state="checked"])) {
		border-color: var(--color-primary);
		background: oklch(from var(--color-primary) l c h / 0.08);
	}

	.options :global(.bits-checkbox label),
	.consent :global(.bits-checkbox label) {
		flex: 1;
		padding: 0.75rem 0.875rem 0.75rem 0;
		font-weight: normal;
		cursor: pointer;
	}

	.consent {
		margin-top: 3rem;
	}

	.field :global([data-select-trigger]) {
		width: 100%;
		padding: 0.75rem;
		background: var(--color-input-bg);
	}

	:global([data-select-content]) {
		width: var(--bits-select-anchor-width);
		background: var(--color-gray-900);
	}

	.error {
		margin: 1.5rem 0 0;
		color: var(--color-error);
		font-family: var(--font-sans);
	}

	.missing {
		margin: 0.75rem 0 0;
		text-align: center;
		font-family: var(--font-sans);
		font-size: var(--14px);
		color: var(--color-fg-light);
	}

	form :global(.submit) {
		width: 100%;
		margin-top: 2rem;
		font-weight: bold;
	}
</style>
