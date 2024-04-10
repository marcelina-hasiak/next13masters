"use client";

import Link from "next/link";
import { styled } from "@/styled-system/jsx";

export const ActiveLinkStyled = styled(Link, {
	base: {
		display: "flex",
		gap: "0.5rem",
		padding: "0.25rem",
		fontFamily: "var(--orbitron)",
		borderWidth: "1px",
	},
	variants: {
		status: {
			active: {
				borderColor: "#030712",
				backgroundColor: "#00000021",
			},
			inactive: {
				borderColor: "transparent",
				backgroundColor: "transparent",
			},
		},
	},
	defaultVariants: {
		status: "inactive",
	},
});
