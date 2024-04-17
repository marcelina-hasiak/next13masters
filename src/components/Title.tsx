import { cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

const titleStyles = cva({
	variants: {
		variant: {
			default: {
				fontFamily: "var(--orbitron)",
				textTransform: "uppercase",
				textAlign: "center",
			},
			carousel: {
				textTransform: "lowercase",
				color: "#00f0ff",
				border: "2px solid #00f0ff",
				backgroundColor: "#000000",
				padding: "0.5rem 3rem 0.5rem 1.5rem",
				width: "60%",
			},
		},
		size: {
			small: {
				fontSize: "1rem",
			},
			medium: {
				fontSize: { base: "1rem", sm: "1.5rem" },
			},
			large: {
				fontSize: { base: "1rem", ssm: "4rem" },
			},
		},
	},
	defaultVariants: { variant: "default", size: "medium" },
});

export const Title = styled("h2", titleStyles);
