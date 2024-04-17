import { type Product } from "@/types";
import { Products } from "@/components/Products";

const products: Product[] = [
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
	return <Products products={products} />;
}
