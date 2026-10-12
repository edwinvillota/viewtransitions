import type { Category } from '@/common/types/Products';

export const MOCKED_CATEGORIES: Array<Category> = [
	{ id: 'gpu', label: 'GPUs', sectionTitle: 'Graphics cards', code: 'GPU' },
	{ id: 'cpu', label: 'CPUs', sectionTitle: 'Processors', code: 'CPU' },
	{ id: 'memory', label: 'Memory', sectionTitle: 'Memory kits', code: 'RAM' },
	{ id: 'storage', label: 'Storage', sectionTitle: 'SSDs', code: 'SSD' },
];

export const DEFAULT_CATEGORY_ID: Category['id'] = 'gpu';
