import { ViewTransition } from 'react';
import { Link } from 'react-router';
import { MOCKED_PRODUCTS } from '@/common/mocks/product_list';

const Products = () => {
	return (
		<section className="flex flex-col gap-2">
			<ViewTransition name="page-title">
				<h1 className="w-fit px-3 py-2 bg-slate-200">Products</h1>
			</ViewTransition>
			<div className="grid grid-cols-3 gap-2">
				{MOCKED_PRODUCTS.map((product) => (
					<Link key={product.id} to={`/product/${product.id}`}>
						<div className="flex flex-col gap-2 p-2 border-2 border-slate-200 hover:bg-slate-300 transition-colors duration-300">
							<ViewTransition
								name={`product-title-${product.id}`}
								default="product-title"
							>
								<h3 className="w-fit">{product.label}</h3>
							</ViewTransition>
							<p>{product.shortDescription}</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Products;
