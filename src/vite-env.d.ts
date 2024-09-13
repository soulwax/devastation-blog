/// <reference types="vite/client" />
/// <reference types="@sveltejs/kit" />
/// <reference types="vitest" />

declare module '@sveltejs/kit/vite' {
	import type { Plugin } from 'vite';
	export function sveltekit(): Plugin;
}
