<script>
	import { setContext } from "svelte";
	import Meta from "$components/Meta.svelte";
	import Index from "$components/Index.svelte";
	import copy from "$data/copy.json";
	import fill from "$utils/fill.js";
	import "$utils/version.js";

	let { data } = $props();

	const preloadFont = [
		"https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Regular.woff2",
		"https://pudding.cool/assets/fonts/tiempos/TiemposTextWeb-Bold.woff2",
		"https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Regular-Web.woff2",
		"https://pudding.cool/assets/fonts/atlas/AtlasGrotesk-Bold-Web.woff2"
	];

	const { description, url, keywords } = copy;
	const title = $derived(fill(copy.intro.hed, data.place));
	setContext("copy", copy);
</script>

<Meta
	{title}
	{description}
	url="{url}/{data.place.id}"
	{preloadFont}
	{keywords}
/>
{#key data.place.id}
	<Index place={data.place} />
{/key}
