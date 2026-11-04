import copy from "$data/copy.json";

// only places with a sentence to read are live: listed in the dropdown and given a page
export const places = copy.places.filter((d) => d.sentence?.trim());
