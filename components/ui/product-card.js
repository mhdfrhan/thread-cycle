import Image from "next/image";

const ProductCard = ({ product }) => {
	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
		}).format(number);
	}
	return (
		<div>
			<div className="relative">
				<Image width={200} height={200} className="w-full h-full rounded-lg" src={product.image} alt={product.title} />
				<div className="absolute top-2 right-2 font-medium bg-neutral-300/70 dark:bg-black/70 py-1.5 px-3 text-xs uppercase rounded-full">
					{product.category}
				</div>
			</div>
			<div className="mt-2 text-center">
				<h3 className="font-semibold text-2xl">{product.title}</h3>
				<p className="text-neutral-300">{rupiah(product.price)}</p>
			</div>
		</div>
	);
}

export default ProductCard;