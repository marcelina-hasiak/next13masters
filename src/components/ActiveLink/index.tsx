"use client";

import { type ReactNode } from "react";
import type { Route } from "next";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ActiveLinkStyled } from "./ActiveLink.styles";

type ActiveLinkProps<T extends string> = {
	href: Route<T> | URL;
	withIcon?: boolean;
	label?: string;
	children?: ReactNode;
	exact?: boolean;
};

// TODO: check exact prop

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
