import { css } from "@/styled-system/css";

export const navigationStyles = css({
	display: "flex",
	alignItems: "flex-start",
	gap: "0.25rem",
	textTransform: "uppercase",
	sm: { justifyContent: "flex-end", fontSize: "1.125rem" },
});

export const collectionWrapperStyles = css({
	display: "grid",
	gridTemplateColumns: {
		base: "repeat(2, minmax(max-content, 1fr))",
		sm: "repeat(3, minmax(max-content, 1fr))",
	},
	gridGap: "0.25rem",
});
