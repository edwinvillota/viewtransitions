import { Plus } from 'lucide-react';
import type { FC } from 'react';
import type { Product } from '@/common/types/Products';
import { formatPrice } from '@/common/utils/money';

interface ProductCardProps {
	product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
	return (
		<div className="flex flex-col gap-2.5">
			<div className="relative h-56  rounded-xl overflow-hidden">
				<img
					className="h-full w-full object-cover object-center"
					alt={product.label}
					src={product.gallery[0]}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex flex-col">
					<span className="font-(family-name:--font-mono) text-(--color-muted) text-xs">
						{product.cardMeta}
					</span>
					<p className="font-(family-name:--font-display) font-bold text-lg">
						{product.label}
					</p>
				</div>
				<div className="flex justify-between items-center">
					<span className="font-(family-name:--font-sans) text-lg font-bold">
						{formatPrice(product.priceCents)}
					</span>
					<button
						type="button"
						className=" flex justify-center items-center h-9 aspect-square bg-black rounded-full"
					>
						<Plus className="text-white" size={20} />
					</button>
				</div>
			</div>
		</div>
	);
};
