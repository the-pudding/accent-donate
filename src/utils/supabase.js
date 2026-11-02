import { createClient } from "@supabase/supabase-js";
import {
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_PUBLISHABLE_KEY
} from "$env/static/public";

const supabase = createClient(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_PUBLISHABLE_KEY,
	{ auth: { persistSession: false } }
);

const BUCKET = "accent-recordings";
const TABLE = "accent_submissions";

// "audio/webm;codecs=opus" -> "webm"
function extension(type) {
	if (type.includes("mp4")) return "mp4";
	if (type.includes("ogg")) return "ogg";
	return "webm";
}

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// upload the clip; returns the id that names both the file and its row
export async function uploadAudio({ audio, place }) {
	const id = crypto.randomUUID();
	const contentType = audio.type.split(";")[0] || "audio/webm";
	const path = `${place}/${id}.${extension(audio.type)}`;

	const { error } = await supabase.storage
		.from(BUCKET)
		.upload(path, audio, { contentType });
	if (error) throw error;

	return { id, path };
}

// save the row for an uploaded clip, retrying so we don't strand the file
export async function saveRow(row, attempts = 3) {
	for (let i = 1; i <= attempts; i++) {
		const { error } = await supabase.from(TABLE).insert(row);
		// 23505: this id is already saved (an earlier attempt went through)
		if (!error || error.code === "23505") return;
		if (i === attempts) throw error;
		await wait(1000 * i);
	}
}
