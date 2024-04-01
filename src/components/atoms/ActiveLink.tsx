"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { type ReactNode } from "react";
import { styled } from "@/styled-system/jsx";

type ActiveLinkProps<T extends string> = {
	href: Route<T> | URL;
	withIcon?: boolean;
	label?: string;
	children?: ReactNode;
	exact?: boolean;
};

const ActiveLinkStyled = styled(Link, {
	base: {
		display: "flex",
		gap: "2",
		padding: "1",
		fontFamily: "var(--orbitron)",
		borderWidth: "1px",
	},
	variants: {
		status: {
			active: {
				borderColor: "black",
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

export const ActiveLink = <T extends string>({
	href,
	withIcon = false,
	label = "",
	children,
	exact = false,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const isPathnameEqual =
		typeof href === "string"
			? pathname === href
			: pathname === href.pathname;

	const isPathnameStartsWith =
		typeof href === "string"
			? pathname.startsWith(href + "/")
			: pathname.startsWith(href.pathname + "/");

	const isActive =
		isPathnameEqual || (!exact && isPathnameStartsWith);

	return (
		<ActiveLinkStyled
			href={href as Route}
			aria-current={isActive}
			status={isActive ? "active" : "inactive"}
		>
			{withIcon && (
				<Image
					width={16}
					height={16}
					src={`/icons/${label}.svg`}
					alt={`${label} product category`}
				/>
			)}
			{label || children}
		</ActiveLinkStyled>
	);
};
