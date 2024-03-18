import type { Route } from "next";
import { ActiveLink } from "@/components/atoms/ActiveLink";

const navigationItems = {
	products: {
		href: "/products",
		label: "all",
	},
	colletionItems: [
		{
			href: "/collection/health",
			label: "health",
		},
		{ href: "/collection/defence", label: "defence" },
		{ href: "/collection/combat", label: "combat" },
		{ href: "/collection/netrun", label: "netrun" },
		{ href: "/collection/time", label: "time" },
		{ href: "/collection/misc", label: "misc" },
	],
};

export const Navigation = () => {
	const { products, colletionItems } = navigationItems;
	return (
		<nav className="mb-9 flex items-start uppercase xsm:justify-end xsm:text-lg">
			<ActiveLink href={products.href as Route} exact={false}>
				{products.label}
			</ActiveLink>
			<div className="grid [grid-template-columns:repeat(2,_minmax(max-content,_1fr))] xsm:grid-cols-3">
				{colletionItems.map(({ href, label }) => (
					<ActiveLink href={href as Route} label={label} key={label}>
						{label}
					</ActiveLink>
				))}
			</div>
		</nav>
	);
};
