import { css } from "@/styled-system/css";

const backgroundStyles = css({
	backgroundImage: 'url("/bg-lg.webp")',
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center bottom",
	p: "1rem",
	minHeight: "100dvh",
});

export const Background = ({
	children,
}: {
	children: React.ReactNode;
}) => <div className={backgroundStyles}>{children}</div>;
