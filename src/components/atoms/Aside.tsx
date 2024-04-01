import { styled } from "@/styled-system/jsx";

const AsideStyled = styled("aside", {
	base: {
		marginBottom: "8",
		border: "1px solid #030712",
		backgroundColor: "#00f0ff",
		px: "3",
		py: "2",
		fontSize: "xs",
		sm: { maxWidth: "2xl", fontSize: "sm" },
	},
});

export const Aside = () => {
	return (
		<AsideStyled>
			<p>
				Step into the future of style with our cutting-edge cyberware
				collection. Upgrade your look, upgrade your life – shop the
				future, today!
			</p>
		</AsideStyled>
	);
};
