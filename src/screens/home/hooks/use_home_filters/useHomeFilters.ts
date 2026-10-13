import { useSearchParams } from 'react-router';
import { z } from 'zod';

const homeFiltersSchema = z.object({
	q: z.string().default('').optional(),
	category: z.string().optional(),
});

type HomeFilters = z.infer<typeof homeFiltersSchema>;

export const useHomeFilters = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const paramsObject = Object.fromEntries(searchParams.entries());
	const parsedParams = homeFiltersSchema.parse(paramsObject);

	const setFilters = (updates: Partial<HomeFilters>) => {
		setSearchParams((prev) => {
			const nextParams = new URLSearchParams(prev);

			Object.entries(updates).forEach(([key, value]) => {
				if (value === undefined || value === '') {
					nextParams.delete(key);
				} else {
					nextParams.set(key, String(value));
				}
			});

			return nextParams;
		});
	};

	return [parsedParams, setFilters] as const;
};
