import { error } from "@sveltejs/kit";
import copy from "$data/copy.json";

// prerender a page for every place in the doc
export function entries() {
	return copy.places.map((d) => ({ place: d.id }));
}

export function load({ params }) {
	const place = copy.places.find((d) => d.id === params.place);
	if (!place) error(404, "Place not found");
	return { place };
}
