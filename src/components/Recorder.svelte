<script>
	import { onMount } from "svelte";
	import Mic from "@lucide/svelte/icons/mic";
	import Square from "@lucide/svelte/icons/square";
	import RotateCcw from "@lucide/svelte/icons/rotate-ccw";
	import Button from "$components/ui/Button.svelte";

	// copy: the `record` object from copy.json
	// blob: the finished recording, bound up to the parent
	// duration: its length in seconds
	let { copy, blob = $bindable(null), duration = $bindable(null) } = $props();

	const MIN_SECONDS = 1;
	const MAX_SECONDS = 30;

	// "idle" | "recording" | "recorded" | "unsupported"
	let status = $state("idle");
	let error = $state(""); // key into copy, e.g. "micDenied"
	let inApp = $state(false);
	let elapsed = $state(0);
	let audioUrl = $state(null);

	let recorder;
	let stream;
	let chunks = [];
	let timer;
	let startedAt;

	const format = (s) =>
		`${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

	onMount(() => {
		// no mic API in old browsers, some in-app browsers, or over plain http
		if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
			status = "unsupported";
		}
		// instagram, facebook, tiktok, snapchat, etc. often block the mic
		inApp = /Instagram|FBAN|FBAV|TikTok|musical_ly|Snapchat|Line\//i.test(
			navigator.userAgent
		);
	});

	function micError(err) {
		if (err.name === "NotAllowedError" || err.name === "SecurityError")
			return "micDenied";
		if (err.name === "NotFoundError" || err.name === "OverconstrainedError")
			return "micMissing";
		if (err.name === "NotReadableError") return "micBusy";
		return "micError";
	}

	function release() {
		clearInterval(timer);
		// release the mic so the browser recording indicator goes away
		stream?.getTracks().forEach((t) => t.stop());
		stream = null;
	}

	async function start() {
		error = "";
		try {
			stream = await navigator.mediaDevices.getUserMedia({ audio: true });
		} catch (err) {
			console.error(err);
			error = micError(err);
			return;
		}

		try {
			chunks = [];
			recorder = new MediaRecorder(stream, { audioBitsPerSecond: 64000 });
		} catch (err) {
			console.error(err);
			release();
			error = "micError";
			return;
		}

		recorder.ondataavailable = (e) => {
			if (e.data.size) chunks.push(e.data);
		};
		recorder.onstop = () => {
			release();
			const length = Math.round((performance.now() - startedAt) / 100) / 10;
			const result = new Blob(chunks, { type: recorder.mimeType });
			if (length < MIN_SECONDS || !result.size) {
				error = "tooShort";
				status = "idle";
				return;
			}
			blob = result;
			duration = length;
			audioUrl = URL.createObjectURL(result);
			status = "recorded";
		};
		recorder.onerror = (e) => {
			console.error(e.error);
			error = "micError";
			stop();
		};
		// mic unplugged or taken by another app mid-recording
		stream.getAudioTracks()[0].onended = stop;

		recorder.start();
		startedAt = performance.now();
		status = "recording";
		elapsed = 0;
		timer = setInterval(() => {
			elapsed += 1;
			if (elapsed >= MAX_SECONDS) stop();
		}, 1000);
	}

	function stop() {
		clearInterval(timer);
		if (recorder?.state === "recording") recorder.stop();
	}

	function reset() {
		if (audioUrl) URL.revokeObjectURL(audioUrl);
		audioUrl = null;
		blob = null;
		duration = null;
		error = "";
		status = "idle";
	}

	$effect(() => () => {
		if (recorder) recorder.onstop = null;
		stop();
		release();
		if (audioUrl) URL.revokeObjectURL(audioUrl);
	});
</script>

<div class="recorder" data-status={status}>
	{#if status === "unsupported"}
		<p class="error" role="alert">{inApp ? copy.inApp : copy.unsupported}</p>
	{:else if status === "idle"}
		<button class="mic" onclick={start}>
			<span class="icon"><Mic /></span>
			{copy.start}
		</button>
		{#if error}
			<p class="error" role="alert">{copy[error]}</p>
		{:else if inApp}
			<p class="note">{copy.inApp}</p>
		{/if}
	{:else if status === "recording"}
		<button class="mic" onclick={stop}>
			<span class="icon"><Square /></span>
			{copy.stop}
		</button>
		<p class="live" aria-live="polite">
			<span class="dot"></span>
			{copy.recording}
			<span class="time">{format(elapsed)} / {format(MAX_SECONDS)}</span>
		</p>
	{:else if status === "recorded"}
		<p class="review">{copy.review}</p>
		<audio controls src={audioUrl}></audio>
		<Button variant="outline" onclick={reset}>
			<RotateCcw size={16} />
			<span>{copy.retry}</span>
		</Button>
	{/if}
</div>

<style>
	.recorder {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		text-align: center;
	}

	.mic {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		padding: 0;
		background: none;
		color: var(--color-fg);
		font-family: var(--font-form);
		font-size: var(--16px);
		font-weight: bold;
	}

	.icon {
		display: grid;
		place-items: center;
		width: 5.5rem;
		height: 5.5rem;
		border-radius: 50%;
		background: var(--color-primary);
		color: var(--color-button-fg-primary);
		transition: transform calc(var(--1s) * 0.2) ease;
	}

	.icon :global(svg) {
		width: 2rem;
		height: 2rem;
	}

	.mic:hover .icon {
		transform: scale(1.05);
	}

	.mic:active .icon {
		transform: scale(0.95);
	}

	[data-status="recording"] .icon {
		background: var(--color-error);
		animation: pulse calc(var(--1s) * 1.5) ease-out infinite;
	}

	[data-status="recording"] .icon :global(svg) {
		width: 1.5rem;
		height: 1.5rem;
		fill: currentColor;
	}

	.live {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin: 0;
		font-family: var(--font-form);
		color: var(--color-fg-light);
	}

	.dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background: var(--color-error);
	}

	.time {
		font-family: var(--font-mono);
		color: var(--color-fg);
	}

	.error,
	.note {
		margin: 0;
		max-width: 28rem;
		font-family: var(--font-sans);
		font-size: var(--14px);
	}

	.error {
		color: var(--color-error);
	}

	.note {
		color: var(--color-fg-light);
	}

	.review {
		margin: 0;
		font-family: var(--font-form);
		color: var(--color-fg-light);
	}

	audio {
		width: 100%;
	}

	.recorder :global(.bits-button) {
		gap: 0.5rem;
		white-space: nowrap;
	}

	.recorder :global(.bits-button svg) {
		width: 1rem;
		height: 1rem;
	}

	@keyframes pulse {
		0% {
			box-shadow: 0 0 0 0 oklch(from var(--color-error) l c h / 0.6);
		}
		100% {
			box-shadow: 0 0 0 1.25rem oklch(from var(--color-error) l c h / 0);
		}
	}
</style>
