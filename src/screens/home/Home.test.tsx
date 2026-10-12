import { act, render, screen } from '@testing-library/react';
import HomeScreen from './Home';

/** Home suspends while categories load, so the render must be awaited. */
const renderHome = async () => {
	await act(async () => {
		render(<HomeScreen />);
	});
};

describe('Home screen', () => {
	it('renders the main heading', async () => {
		await renderHome();
		expect(
			screen.getByRole('heading', {
				name: /build your next rig/i,
			}),
		).toBeInTheDocument();
	});

	it('renders categories served by MSW', async () => {
		await renderHome();
		expect(
			await screen.findByRole('button', { name: 'GPUs' }),
		).toBeInTheDocument();
	});
});
