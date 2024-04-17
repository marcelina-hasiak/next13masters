import Image from "next/image";
import {
	headerStyles,
	wrapperStyles,
	textStyles,
} from "./Header.styles";
import { VStack } from "@/styled-system/jsx";
import { Navigation } from "@/components/Navigation";
import { BrandLogo } from "@/components/BrandLogo";

export const Header = () => {
	return (
		<header className={headerStyles}>
			<div className={wrapperStyles}>
				<BrandLogo />
				<VStack gap="2rem">
					<Image
						src="/icons/cart.svg"
						alt="cart"
						height="24"
						width="24"
					/>
				</VStack>
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
