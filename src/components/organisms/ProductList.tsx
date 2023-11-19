import { ProductItem } from "../molecules/ProductItem";
import { type IProduct } from "../types";

export const ProductList = ({
	products,
}: {
	products: IProduct[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className="3xsm:grid-cols-2 grid justify-items-start gap-6 bg-black bg-opacity-20 py-6 pl-6 pr-12 [clip-path:polygon(90%_0,_100%_5%,_100%_100%,_0_100%,_0_0)] sm:grid-cols-3 sm:[clip-path:polygon(95%_0,_100%_5%,_100%_100%,_0_100%,_0_0)] md:grid-cols-4"
		>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};
