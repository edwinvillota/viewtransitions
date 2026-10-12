import { useState } from 'react';

export const useCategoryFilter = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	return {
		selectedCategory,
		setSelectedCategory,
	} as const;
};
