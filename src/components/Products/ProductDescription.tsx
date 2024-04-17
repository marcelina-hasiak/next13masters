import Image from "next/image";
import { type Product } from "@/types";
import { css } from "@/styled-system/css";

import { formatPrice } from "@/utils";

type ProductMeta = {
	product: Product;
};

const nameContainerStyles = css({
	display: "flex",
	alignItems: "flex-start",
	justifyContent: "space-between",
	gap: "0.5rem",
});

const nameStyles = css({
	textTransform: "uppercase",
	fontFamily: "var(--orbitron)",
});

const priceContainerStyles = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "0.5rem",
});

const priceStyles = css({
	fontSize: { base: "0.875rem", sm: "1rem" },
});

const ratingStyles = css({
	display: "flex",
	fontSize: "0.75rem",
});

export const ProductDescription = ({
	product: { name, rating, price, category },
}: ProductMeta) => {
	return (
		<>
			<div className={nameContainerStyles}>
				<h3 className={nameStyles}>{name}</h3>
				<Image
					width={16}
					height={16}
					src={`/icons/${category}.svg`}
					alt={`${category} product category`}
					className={css({ mt: "0.25rem" })}
				/>
			</div>
			<div className={priceContainerStyles}>
				<p className={priceStyles}>{formatPrice(price / 100)}</p>
				<p className={ratingStyles}>
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
