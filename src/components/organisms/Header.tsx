import { Navigation } from "@/components/molecules/Navigation";
import { BrandLogo } from "@/components/atoms/BrandLogo";
import { Aside } from "@/components/atoms/Aside";

export const Header = () => {
	return (
		<header>
			<BrandLogo />
			<Aside />
			<Navigation />
		</header>
	);
};
