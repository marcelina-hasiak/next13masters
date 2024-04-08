import { css } from "@/styled-system/css";

const asideStyles = css({
	border: "1px solid #030712",
	backgroundColor: "#00f0ff",
	p: "0.5rem 0.75rem",
	marginBottom: "2rem",
	fontSize: { base: "0.75rem", xsm: "1rem" },
	md: { maxWidth: "40rem" },
});

export const Aside = () => {
	return (
		<aside className={asideStyles}>
			<p>
				Step into the future of style with our cutting-edge cyberware
				collection. Upgrade your look, upgrade your life – shop the
				future, today!
			</p>
		</aside>
	);
};
