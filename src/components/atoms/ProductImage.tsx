export const ProductImage = ({
	alt,
	src,
}: {
	alt: string;
	src: string;
}) => {
	return (
		<div className="mb-4 overflow-hidden rounded">
			<img
				width={200}
				height={350}
				alt={alt}
				src={src}
				className="3xsm:w-full transition-transform hover:scale-150"
			/>
		</div>
	);
};
