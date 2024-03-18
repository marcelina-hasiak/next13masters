import Image from "next/image";

export const ProductImage = ({
	alt,
	src,
}: {
	alt: string;
	src: string;
}) => {
	return (
		<div className="mb-4 overflow-hidden rounded">
			<Image
				width={170}
				height={300}
				alt={alt}
				src={src}
				className="transition-transform hover:scale-150 3xsm:w-full"
				unoptimized={true} // TODO: investigate how to solve this
			/>
		</div>
	);
};
