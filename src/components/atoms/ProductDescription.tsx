import Image from "next/image";
import { type IProduct } from "../types";
import { css } from "@/styled-system/css";

import { formatPrice } from "@/utils";
import { orbitron } from "@/app/fonts";

type ProductMeta = {
	product: IProduct;
};

export const ProductDescription = ({
	product: { name, rating, price, category },
}: ProductMeta) => {
	return (
		<>
			<div
				className={css({
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "space-between",
					gap: "2",
				})}
			>
				<h3 className={`${orbitron.className} uppercase`}>{name}</h3>
				<Image
					width={16}
					height={16}
					src={`/icons/${category}.svg`}
					className={css({ mt: "1" })}
					alt={`${category} product category`}
				/>
			</div>
			<div
				className={css({
					display: "flex",
					alignItems: "flex-end",
					justifyContent: "space-between",
					gap: "2",
				})}
			>
				<p
					className={css({
						fontSize: "sm",
						lineHeight: "sm",
						sm: { fontSize: "base", lineHeight: "base" },
					})}
				>
					{formatPrice(price / 100)}
				</p>
				<p
					className={css({
						display: "flex",
						fontSize: "xs",
						lineHeight: "5",
					})}
				>
					{rating}
					<Image
						width={8}
						height={8}
						src="/icons/star.svg"
						alt="product rating"
					/>
				</p>
			</div>
		</>
	);
};
