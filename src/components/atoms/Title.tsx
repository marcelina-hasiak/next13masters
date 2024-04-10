import { css } from "@/styled-system/css";

const titleStyles = css({
	fontFamily: "var(--orbitron)",
	fontSize: { base: "1rem", xsm: "1.5rem" },
	textTransform: "uppercase",
	textAlign: "center",
});

export const Title = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return <h2 className={titleStyles}>{children}</h2>;
};
