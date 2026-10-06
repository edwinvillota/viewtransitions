import { ViewTransition } from 'react';
import { useParams } from 'react-router';
import { MOCKED_PRODUCTS } from '../../common/mocks/product_list';
import type { Product } from '../../common/types/Products';

const findProduct = (id: Product['id']) =>
	MOCKED_PRODUCTS.find((product) => product.id === id);

const ProductDetails = () => {
	const params = useParams<'productId'>();

	const product = findProduct(Number(params.productId));

	if (!product) return <h1>{`Product ${params.productId} doesn't exist`}</h1>;

	return (
		<div className="flex flex-col gap-2">
			<ViewTransition
				name={`product-title-${product.id}`}
				default="product-title"
			>
				<h1 className="w-fit">{product?.label}</h1>
			</ViewTransition>
			<p>{product?.description}</p>
		</div>
	);
};

export default ProductDetails;
