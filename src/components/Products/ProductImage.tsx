import { css } from "@/styled-system/css";

const imageContainerStyles = css({
	overflow: "hidden",
	borderRadius: "0.5rem",
});

const imageStyles = css({
	width: "100%",
	maxWidth: "240px",
	transition: "transform 0.3s ease-in-out",
	_hover: {
		transform: "scale(1.05)",
	},
});

export const ProductImage = ({
	alt,
	src,
}: {
	alt: string;
	src: string;
}) => {
	return (
		<div className={imageContainerStyles}>
			<img alt={alt} src={src} className={imageStyles} />
		</div>
	);
};
