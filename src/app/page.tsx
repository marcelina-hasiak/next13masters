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
];

export default function Home() {
	return (
		<>
			<h1>Cyberware</h1>
			<section className="mx-4 [width:fit-content] sm:mr-8">
				<h2 className="w-3/4 border-2 border-solid border-cyan bg-black py-2 pl-6 pr-12 lowercase text-cyan">
					New products
				</h2>
				<ProductList products={products} />
			</section>
		</>
	);
}
