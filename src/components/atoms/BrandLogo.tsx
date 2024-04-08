import Link from "next/link";
import { css } from "@/styled-system/css";

const brandLogoStyles = css({
	lineHeight: "1.2",
	fontFamily: "var(--sarpanch)",
	fontSize: { base: "3rem", xsm: "4.5rem" },
	fontWeight: "700",
	textTransform: "uppercase",
	marginBottom: { base: "1rem", xsm: "2rem" },
});

export const BrandLogo = () => {
	return <h1 className={brandLogoStyles}>Cyberware</h1>;
};

export const BrandLogoLink = () => {
	return (
		<Link href="/">
			<BrandLogo />
		</Link>
	);
};
