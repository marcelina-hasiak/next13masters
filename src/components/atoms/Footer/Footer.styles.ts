import { css } from "@/styled-system/css";

export const footerStyles = css({
	display: "flex",
	flexDirection: "column",
	gap: { base: "2rem", "2xsm": "3rem" },
	backgroundColor: "#000000",
	color: "#ffffff",
	padding: "2rem",
});

export const linksContainerStyles = css({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	"2xsm": {
		flexDirection: "row",
		gap: "2rem",
		justifyContent: "flex-start",
	},
});

export const copyrightStyles = css({
	display: "flex",
	alignItems: "center",
	flexWrap: "wrap",
	gap: "2px",
	justifyContent: { base: "center", "2xsm": "flex-end" },
	fontSize: "0.75rem",
});
