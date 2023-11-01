import { type IProduct } from "../types";
import { ProductDescription } from "@/components/atoms/ProductDescription";
import { ProductImage } from "@/components/atoms/ProductImage";

type Product = {
	product: IProduct;
};

export const ProductItem = ({ product }: Product) => {
	return (
		<li>
			<article className="[word-break:break-word]">
				<ProductImage {...product.image} />
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
