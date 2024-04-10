import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import {
	footerStyles,
	linksContainerStyles,
	copyrightStyles,
} from "./Footer.styles";

const footerLinks = [
	{
		href: "/terms-of-use",
		label: "terms of use",
	},
	{
		href: "/return-policy",
		label: "return policy",
	},
	{
		href: "/privacy-policy",
		label: "privacy policy",
	},
];

export const Footer = () => {
	return (
		<footer className={footerStyles}>
			<ul className={linksContainerStyles}>
				{footerLinks.map(({ href, label }) => (
					<li key={label}>
						<Link href={href as Route}>{label}</Link>
					</li>
				))}
			</ul>
			<p className={copyrightStyles}>
				Developed with
				<Image src="/heart.svg" alt="love" height="24" width="24" />
				by Marcelina, 2024
			</p>
		</footer>
	);
};
