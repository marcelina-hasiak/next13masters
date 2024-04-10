import {
	headerStyles,
	wrapperStyles,
	textStyles,
} from "./Header.styles";
import { VStack } from "@/styled-system/jsx";
import { Navigation } from "@/components/molecules/Navigation";
import { BrandLogo } from "@/components/atoms/BrandLogo";

export const Header = () => {
	return (
		<header className={headerStyles}>
			<div className={wrapperStyles}>
				<BrandLogo />
				<VStack gap="2rem">placeholder</VStack>
			</div>
			<p className={textStyles}>
				Step into the future of style with our cutting-edge cyberware
				collection. Upgrade your look, upgrade your life – shop the
				future, today!
			</p>
			<Navigation />
		</header>
	);
};
