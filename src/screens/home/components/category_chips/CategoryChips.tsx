import { type FC, Suspense, use } from 'react';
import { getCategories } from '@/common/api/categories';
import { Chip } from '@/components/atoms';
import { useHomeFilters } from '../../hooks/use_home_filters';

type CategoryChipsProps = {};

const ChipsList = () => {
	const [filters, setFilters] = useHomeFilters();
	const categories = use(getCategories());

	const handleToggleCategory = (categoryId: string) => () => {
		if (filters.category === categoryId) {
			setFilters({ category: '' });
		} else {
			setFilters({ category: categoryId });
		}
	};

	return (
		<fieldset aria-label="Filter by category" className="flex flex-row gap-2">
			{categories.map((category) => (
				<Chip
					key={category.id}
					handleClick={handleToggleCategory(category.id)}
					active={filters.category === category.id}
				>
					{category.label}
				</Chip>
			))}
		</fieldset>
	);
};

export const CategoryChips: FC<CategoryChipsProps> = () => {
	return (
		<Suspense fallback={<span>Loading...</span>}>
			<ChipsList />
		</Suspense>
	);
};
