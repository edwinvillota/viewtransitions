import { render, screen } from '@testing-library/react';
import Products from './Products';

describe('Products screen', () => {
	it('renders the main heading', () => {
		render(<Products />);
		expect(
			screen.getByRole('heading', {
				name: /Products/i,
			}),
		).toBeInTheDocument();
	});
});
