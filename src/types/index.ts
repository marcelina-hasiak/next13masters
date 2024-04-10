export type Product = {
	id: string;
	name: string;
	rating: number;
	price: number;
	category: string;
	image: { src: string; alt: string };
};

export type Term = {
	title: string;
	content: string;
};
