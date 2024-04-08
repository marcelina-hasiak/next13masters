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
			breakpoints: {
				"2xsm": "470px",
				xsm: "520px",
			},
		},
	},

	// Global styles
	globalCss: {
		body: {
			color: "#000",
			backgroundColor: "#000",
			fontFamily: "var(--share-tech-mono)",
		},
	},

	// The output directory for your css system
	outdir: "src/styled-system",

	jsxFramework: "react",
});
