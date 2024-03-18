import Image from "next/image";
import { type IProduct } from "../types";
import { formatPrice } from "@/utils";
import { orbitron } from "@/app/fonts";

type ProductMeta = {
	product: IProduct;
};

export const ProductDescription = ({
	product: { name, rating, price, category },
}: ProductMeta) => {
	return (
		<>
			<div className="flex items-start justify-between gap-2">
				<h3 className={`${orbitron.className} uppercase`}>{name}</h3>
				<Image
					width={16}
					height={16}
					src={`/icons/${category}.svg`}
					className="mt-1"
					alt={`${category} product category`}
				/>
			</div>
			<div className="flex items-end justify-between gap-2">
				<p className="text-sm sm:text-base">
					{formatPrice(price / 100)}
				</p>
				<p className="flex text-xs leading-5">
					{rating}
					<Image
						width={8}
						height={8}
						src="/icons/star.svg"
						alt="product rating"
					/>
				</p>
			</div>
		</>
	);
};
