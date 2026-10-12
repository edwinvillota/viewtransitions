import type { LucideIcon } from 'lucide-react';
import { Heart, Search, ShoppingBag, Store } from 'lucide-react';

export type TabId = 'shop' | 'search' | 'cart' | 'saved';

export type Tab = {
	id: TabId;
	label: string;
	to: string;
	icon: LucideIcon;
};

/** Bottom tab bar. Search and Saved have no screen in the design yet. */
export const TABS: Array<Tab> = [
	{ id: 'shop', label: 'Shop', to: '/', icon: Store },
	{ id: 'search', label: 'Search', to: '/search', icon: Search },
	{ id: 'cart', label: 'Cart', to: '/cart', icon: ShoppingBag },
	{ id: 'saved', label: 'Saved', to: '/saved', icon: Heart },
];

/** Suggested routes for the four designed screens */
export const ROUTES = {
	catalog: '/',
	product: (id: number) => `/product/${id}`,
	cart: '/cart',
	order: (id: string) => `/order/${id}`,
} as const;
