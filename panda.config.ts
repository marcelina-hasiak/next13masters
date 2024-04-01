import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/app/**/*.{ts,tsx,js,jsx}",
	],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {
			breakpoints: {},
		},
	},

	// Global styles
	globalCss: {
		body: {
			color: "#000",
			fontFamily: "var(--share-tech-mono)",
			backgroundImage: 'url("/bg-lg.webp")',
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center bottom",
			minHeight: "100vh",
			minHeight: "100dvh",
			padding: "4",
		},
	},

	// The output directory for your css system
	outdir: "src/styled-system",

	jsxFramework: "react",
});
