import { ProductItem } from "../molecules/ProductItem";
import { type IProduct } from "../types";
import { css } from "@/styled-system/css";

export const ProductList = ({
	products,
}: {
	products: IProduct[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className={css({
				display: "grid",
				justifyItems: "start",
				gap: "6",
				bgColor: "black",
				pt: "6",
				pb: "6",
				pl: "6",
				pr: "12",
				clipPath: "polygon(90% 0, 100% 5%, 100% 100%, 0 100%, 0 0)",
				sm: {
					gridTemplateColumns: "cols.3",
					clipPath: "polygon(95% 0, 100% 5%, 100% 100%, 0 100%, 0 0)",
				},
				md: { gridTemplateColumns: "cols.4" },
			})}
		>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};
