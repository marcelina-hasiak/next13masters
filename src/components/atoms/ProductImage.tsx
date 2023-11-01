export const ProductImage = ({
	alt,
	src,
}: {
	alt: string;
	src: string;
}) => {
	return (
		<div className="mb-4 overflow-hidden">
			<img
				width={200}
				height={350}
				alt={alt}
				src={src}
				className="rounded transition-transform hover:scale-150 xxsm:w-full"
			/>
		</div>
	);
};
