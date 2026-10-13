import { render, screen } from '@testing-library/react';
import { MainTemplate } from './MainTemplate';

describe('Main template', () => {
	it('renders the main template', () => {
		render(<MainTemplate.Root>test</MainTemplate.Root>);
		expect(screen.getByText(/test/i));
	});
});
