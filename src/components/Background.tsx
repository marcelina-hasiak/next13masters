import { css } from "@/styled-system/css";

const backgroundStyles = css({
	display: "flex",
	flexDirection: "column",
	gap: "2rem",
	backgroundImage: {
		base: 'url("/bg-sm.webp")',
		md: 'url("/bg-lg.webp")',
	},
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center bottom",
	padding: "1rem 1rem 6rem",
	minHeight: "100dvh",
});

export const Background = ({
	children,
}: {
	children: React.ReactNode;
}) => <div className={backgroundStyles}>{children}</div>;
