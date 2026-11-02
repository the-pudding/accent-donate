// swap {name}, {demonym}, etc. in a copy string with values from a place
export default function fill(str, place) {
	return str.replace(/\{(\w+)\}/g, (m, key) => place?.[key] ?? m);
}
