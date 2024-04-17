import { ProductItem } from "./ProductItem";
import { type Product } from "@/types";
import { css } from "@/styled-system/css";

const listStyles = css({
	display: "grid",
	justifyItems: "start",
	gap: "1.5rem",
	gridTemplateColumns: {
		base: "1fr",
		"2xsm": "1fr 1fr",
		lg: "1fr 1fr 1fr 1fr",
	},
	backgroundColor: "#00000040",
	padding: "1.5rem 3rem 1.5rem 1.5rem",
	clipPath: {
		base: "polygon(90% 0, 100% 2%, 100% 100%, 0 100%, 0 0)",
		"2xsm": "polygon(95% 0, 100% 5%, 100% 100%, 0 100%, 0 0)",
	},
	maxWidth: "80vw",
});

export const ProductList = ({
	products,
}: {
	products: Product[];
}) => {
	return (
		<ul className={listStyles}>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};
