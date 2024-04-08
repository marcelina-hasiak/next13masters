import type { Route } from "next";
import { css } from "@/styled-system/css";
import { ActiveLink } from "@/components/atoms/ActiveLink";

const navigationStyles = css({
	mb: "2rem",
	display: "flex",
	alignItems: "flex-start",
	gap: "0.25rem",
	textTransform: "uppercase",
	sm: { justifyContent: "flex-end", fontSize: "1.125rem" },
});

const collectionWrapperStyles = css({
	display: "grid",
	gridTemplateColumns: {
		base: "repeat(2, minmax(max-content, 1fr))",
		sm: "repeat(3, minmax(max-content, 1fr))",
	},
	gridGap: "0.25rem",
});

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
		<nav className={navigationStyles}>
			<ActiveLink href={products.href as Route} exact={false}>
				{products.label}
			</ActiveLink>
			<div className={collectionWrapperStyles}>
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
