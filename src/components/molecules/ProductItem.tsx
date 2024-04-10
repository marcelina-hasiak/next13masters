import { type IProduct } from "../../types";
import { css } from "@/styled-system/css";

import { ProductDescription } from "@/components/atoms/ProductDescription";
import { ProductImage } from "@/components/atoms/ProductImage";

type Product = {
	product: IProduct;
};

export const ProductItem = ({ product }: Product) => {
	return (
		<li>
			<article className={css({ wordBreak: "break-word" })}>
				<ProductImage {...product.image} />
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
