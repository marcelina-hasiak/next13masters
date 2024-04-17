import Link from "next/link";
import { css } from "@/styled-system/css";

const brandLogoStyles = css({
	fontFamily: "var(--sarpanch)",
	fontSize: { base: "3rem", xsm: "4.5rem" },
	fontWeight: "700",
	textTransform: "uppercase",
	textAlign: "center",
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
