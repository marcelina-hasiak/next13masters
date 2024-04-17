import type { Route } from "next";
import {
	navigationStyles,
	collectionWrapperStyles,
} from "./Navigation.styles";
import { ActiveLink } from "@/components/ActiveLink";

const navigationItems = {
	products: {
		href: "/products",
		label: "all",
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
