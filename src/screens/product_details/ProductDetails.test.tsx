import { render, screen } from '@testing-library/react';
import ProductDetails from './ProductDetails';

describe('Product Details Screen', () => {
	it('renders the main header', () => {
		render(<ProductDetails />);
		expect(
			screen.getByRole('heading', {
				name: /Product details/i,
			}),
		).toBeInTheDocument();
	});
});
