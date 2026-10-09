import { BrowserRouter, Route, Routes } from 'react-router';
import { DetailsTemplate, MainTemplate } from '@/components/templates';
import Products from '@/screens/products/Products';
import ProductDetails from '../screens/product_details/ProductDetails';

const Router = () => {
	return (
		<BrowserRouter useTransitions>
			<Routes>
				<Route element={<MainTemplate />}>
					<Route index element={<Products />} />
					<Route element={<DetailsTemplate />}>
						<Route path="/product/:productId" element={<ProductDetails />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
