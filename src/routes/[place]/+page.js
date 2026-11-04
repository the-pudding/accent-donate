import { error } from "@sveltejs/kit";
import { places } from "$utils/places.js";

// prerender a page for every live place (one with a sentence)
export function entries() {
	return places.map((d) => ({ place: d.id }));
}

export function load({ params }) {
	const place = places.find((d) => d.id === params.place);
	if (!place) error(404, "Place not found");
	return { place };
}
