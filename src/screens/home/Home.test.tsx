import { render, screen } from '@testing-library/react';
import HomeScreen from './Home';

describe('Products screen', () => {
	it('renders the main heading', () => {
		render(<HomeScreen />);
		expect(
			screen.getByRole('heading', {
				name: /HomeScreen/i,
			}),
		).toBeInTheDocument();
	});
});
