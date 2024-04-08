import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { css } from "@/styled-system/css";

const footerStyles = css({
	backgroundColor: "#000000",
	color: "#ffffff",
	p: "2rem",
	display: "flex",
	flexDirection: "column",
	gap: { base: "2rem", "2xsm": "3rem" },
});

const linksContainerStyles = css({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	"2xsm": {
		flexDirection: "row",
		gap: "2rem",
		justifyContent: "flex-start",
	},
});

const textStyles = css({
	display: "flex",
	alignItems: "center",
	flexWrap: "wrap",
	justifyContent: { base: "center", "2xsm": "flex-end" },
	fontSize: "0.75rem",
});

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
			<p className={textStyles}>
				Developed with
				<Image
					className={css({ mx: "1px" })}
					src="heart.svg"
					alt="love"
					height="24"
					width="24"
				/>
				by Marcelina, 2024
			</p>
		</footer>
	);
};
