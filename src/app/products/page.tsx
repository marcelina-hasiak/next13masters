import { ProductList } from "@/components/organisms/ProductList";
import { type IProduct } from "@/components/types";

const products: IProduct[] = [
	{
		id: "1",
		name: "Kiroshi Optics",
		rating: 5,
		price: 1010090,
		category: "misc",
		image: {
			src: "/misc/kiroshi-optics.webp",
			alt: "Kiroshi Optics",
		},
	},
	{
		id: "2",
		name: "Ballistic Coprocessor",
		rating: 4,
		price: 834090,
		category: "combat",
		image: {
			src: "/combat/ballistic-coprocessor.webp",
			alt: "Ballistic Coprocessor",
		},
	},
	{
		id: "3",
		name: "Gorilla hands",
		rating: 4,
		price: 510090,
		category: "combat",
		image: {
			src: "/combat/gorilla-hands.webp",
			alt: "Gorilla hands",
		},
	},
	{
		id: "4",
		name: "Immovable force",
		rating: 3,
		price: 540090,
		category: "combat",
		image: {
			src: "/combat/immovable-force.webp",
			alt: "Immovable force",
		},
	},
	// {
	// 	id: "5",
	// 	name: "Smartlink",
	// 	rating: 4,
	// 	price: 480090,
	// 	category: "combat",
	// 	image: {
	// 		src: "/combat/smartlink.webp",
	// 		alt: "Smartlink",
	// 	},
	// },
	// {
	// 	id: "6",
	// 	name: "Pain regulator",
	// 	rating: 4,
	// 	price: 2120090,
	// 	category: "defence",
	// 	image: {
	// 		src: "/defence/pain-regulator.webp",
	// 		alt: "Pain regulator",
	// 	},
	// },
];

export default function ProductsPage() {
	return (
		<section className="sm:[width:fit-content]">
			<h2 className="w-3/4 border-2 border-solid border-cyan bg-black py-2 pl-6 pr-12 lowercase text-cyan">
				New products
			</h2>
			<ProductList products={products} />
		</section>
	);
}
