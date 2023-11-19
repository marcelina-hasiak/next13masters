"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Route } from "next";
import { type ReactNode } from "react";
import { orbitron } from "@/app/fonts";

export const ActiveLink = <T extends string>({
	activeClassName,
	href,
	children,
	label,
}: {
	activeClassName?: string;
	label?: string;
	href: T | Route<T> | URL;
	children: ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<div
			className={`flex gap-2 border px-2 py-1 ${
				isActive
					? `border-black bg-black bg-opacity-20 ${activeClassName}`
					: "border-transparent bg-transparent"
			}`}
		>
			{label && (
				<img
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
