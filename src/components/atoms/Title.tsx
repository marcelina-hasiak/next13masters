import { styled } from "@/styled-system/jsx";

export const Title = styled("h1", {
	base: {
		marginBottom: "2",
		fontFamily: "var(--sarpanch)",
		fontSize: "5xl",
		fontWeight: "700",
		textTransform: "uppercase",
		sm: { marginBottom: "4", fontSize: "7xl" },
	},
});
