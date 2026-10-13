import type { Category } from '@/common/types/Products';
import { fetchJson } from './client';

let categoriesPromise: Promise<Array<Category>> | undefined;

export const getCategories = () => {
	categoriesPromise ??= fetchJson<Category[]>('/categories');
	return categoriesPromise;
};
