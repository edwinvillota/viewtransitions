import type { Edition, Product } from './Products';

export type CartItem = {
	/** Stable id, use it for keys and view-transition-name */
	id: string;
	productId: Product['id'];
	editionId: Edition['id'];
	quantity: number;
	/** ISO date; the most recent item gets the "just added" highlight */
	addedAt: string;
};

export type Promo = {
	code: string;
	percentOff: number;
	label: string;
};

export type CartSummary = {
	itemCount: number;
	subtotalCents: number;
	discountCents: number;
	shippingCents: number;
	totalCents: number;
};
