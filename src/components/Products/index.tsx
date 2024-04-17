import { type Product } from "@/types";
import { ProductList } from "@/components/Products/ProductList";
import { Title } from "@/components/Title";

export const Products = ({ products }: { products: Product[] }) => {
	return (
		<section>
			<Title variant="carousel" size="small">
				New products
			</Title>
			<ProductList products={products} />
		</section>
	);
};
