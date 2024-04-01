import type { Route } from "next";
import { css } from "@/styled-system/css";
import { ActiveLink } from "@/components/atoms/ActiveLink";

const navigationItems = {
	products: {
		href: "/products",
		label: "all",
		withIcon: true,
	},
	colletionItems: [
		{ href: "/collection/health", label: "health", withIcon: true },
		{ href: "/collection/defence", label: "defence", withIcon: true },
		{ href: "/collection/combat", label: "combat", withIcon: true },
		{ href: "/collection/netrun", label: "netrun", withIcon: true },
		{ href: "/collection/time", label: "time", withIcon: true },
		{ href: "/collection/misc", label: "misc", withIcon: true },
	],
};

export const Navigation = () => {
	const { products, colletionItems } = navigationItems;
	return (
		<nav
			className={css({
				mb: "8",
				display: "flex",
				gap: "4",
				textTransform: "uppercase",
				sm: { justifyContent: "flex-end", fontSize: "lg" },
			})}
		>
			<ActiveLink href={products.href as Route} exact={false}>
				{products.label}
			</ActiveLink>
			<div
				className={css({
					display: "grid",
					gridTemplateColumns: "repeat(2, minmax(max-content, 1fr))",
					gridColumnGap: "4",
					gridRowGap: "1",
				})}
			>
				{colletionItems.map(({ href, label, withIcon }) => (
					<ActiveLink
						key={label}
						href={href as Route}
						label={label}
						withIcon={withIcon}
					/>
				))}
			</div>
		</nav>
	);
};
