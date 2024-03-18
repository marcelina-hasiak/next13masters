"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { type RouteType } from "next/dist/lib/load-custom-routes";
import Image from "next/image";
import { orbitron } from "@/app/fonts";

type ActiveLinkProps<Href> = {
	className?: string;
	label?: string;
	exact?: boolean;
	children: React.ReactNode;
	activeClassName?: string;
} & LinkProps<Href>;

export const ActiveLink = <Href extends RouteType>(
	props: ActiveLinkProps<Href>,
) => {
	const pathname = usePathname();
	const {
		children,
		href,
		exact = true,
		activeClassName,
		label,
	} = props;

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
		<div
			className={`flex gap-2 border px-2 py-1 ${
				isActive
					? `border-black bg-black bg-opacity-20 ${activeClassName}`
					: "border-transparent bg-transparent"
			}`}
		>
			{label && (
				<Image
					width={16}
					height={16}
					src={`/icons/${label}.svg`}
					alt={`${label} product category`}
				/>
			)}
			<Link
				href={href}
				className={`${orbitron.className}`}
				aria-current={isActive}
			>
				{children}
			</Link>
		</div>
	);
};
