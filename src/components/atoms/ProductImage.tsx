import Image from "next/image";
import { css } from "@/styled-system/css";

export const ProductImage = ({
	alt,
	src,
}: {
	alt: string;
	src: string;
}) => {
	return (
		<div
			className={css({
				mb: "4",
				overflow: "hidden",
				rounded: "rounded",
			})}
		>
			<Image
				width={170}
				height={300}
				alt={alt}
				src={src}
				className={css({
					transitionProperty: "transform",
					transitionTimingFunction: "transform",
					transitionDuration: "transform",
					_hover: {
						transform:
							"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
					},
				})}
				unoptimized={true} // TODO: investigate how to solve this
			/>
		</div>
	);
};
