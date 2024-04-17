import { css } from "@/styled-system/css";
import { vstack } from "@/styled-system/patterns";

export const headerStyles = vstack({
	gap: "1rem",
	alignItems: "stretch",
});

export const wrapperStyles = css({
	display: "flex",
	justifyContent: "space-between",
	flexDirection: { base: "column", md: "row" },
	gap: { base: "1rem", md: "2rem" },
	alignItems: { base: "flex-start", md: "center" },
});

export const textStyles = css({
	fontSize: { base: "0.75rem", xsm: "1rem" },
	border: "1px solid #030712",
	backgroundColor: "#00f0ff",
	padding: "0.5rem 0.75rem",
	maxWidth: "40rem",
});
