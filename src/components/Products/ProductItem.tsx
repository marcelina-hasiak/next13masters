import { type Product } from "@/types";
import { css } from "@/styled-system/css";

import { ProductDescription } from "@/components/Products/ProductDescription";
import { ProductImage } from "@/components/Products/ProductImage";

export const ProductItem = ({ product }: { product: Product }) => {
	return (
		<li>
			<article
				className={css({
					wordBreak: "break-word",
					display: "flex",
					gap: "0.5rem",
					flexDirection: "column",
				})}
			>
				<ProductImage {...product.image} />
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
