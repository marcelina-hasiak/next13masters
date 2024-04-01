import { Navigation } from "@/components/molecules/Navigation";
import { Title } from "@/components/atoms/Title";
import { Aside } from "@/components/atoms/Aside";

export const Header = () => {
	return (
		<header>
			<Title>Cyberware</Title>
			<Aside />
			<Navigation />
		</header>
	);
};
