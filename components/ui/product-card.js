import Image from "next/image";
import Link from "next/link";

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
				<div className="absolute top-2 right-2 font-medium bg-neutral-300/70 dark:bg-black/70 py-0.5 px-2 sm:py-1.5 sm:px-3 text-[10px] sm:text-xs uppercase rounded-full">
					{product.category}
				</div>
			</div>
			<div className="mt-2  text-center">
				<Link href={`/product/${product.slug}`} className="font-semibold text-sm sm:text-2xl hover:text-orange-500 transition-colors inline-block">
					<h3>{product.title}</h3>
				</Link>
				<p className="text-xs sm:text-base text-neutral-500 dark:text-neutral-300">{rupiah(product.price)}</p>
			</div>
		</div>
	);
}

export default ProductCard;