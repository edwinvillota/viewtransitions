import type { FC } from 'react';
import type { Product } from '@/common/types/Products';
import { ProductCard } from '../product_card';

interface ProductsGridProps {
	items: Product[];
}
export const ProductsGrid: FC<ProductsGridProps> = ({ items }) => {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex justify-between items-baseline">
				<h3 className="text-lg font-bold font-(family-name:--font-display)">
					Graphics cards
				</h3>
				<span className="text-xs font-(family-name:--font-mono) text-(--color-muted)">
					4 results
				</span>
			</div>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(min(169px,100%),1fr))] gap-x-4 gap-y-5">
				{items.map((product) => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	);
};
