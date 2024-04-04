import Image from "next/image";
import { ActiveLink } from "./ActiveLink";
import { styled } from "@/styled-system/jsx";
import { css } from "@/styled-system/css";

const FooterStyled = styled("footer", {
	base: {
		backgroundColor: "#000000",
		color: "#ffffff",
		p: "8",
	},
});

export const Footer = () => {
	return (
		<FooterStyled>
			<div
				className={css({
					display: "flex",
					flexDirection: "column",
					gap: "12",
				})}
			>
				<ul className={css({ display: "flex", gap: "8" })}>
					<li>
						<ActiveLink href="/terms-of-use" label="terms of use" />
					</li>
					<li>
						<ActiveLink href="/return-policy" label="return policy" />
					</li>
					<li>
						<ActiveLink
							href="/privacy-policy"
							label="privacy policy"
						/>
					</li>
				</ul>
				<p
					className={css({
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
					})}
				>
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
			</div>
		</FooterStyled>
	);
};
