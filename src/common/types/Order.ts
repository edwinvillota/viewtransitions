import type { CartItem, CartSummary } from './Cart';

export type OrderStepId = 'placed' | 'packed' | 'shipped' | 'delivered';

export type OrderStep = {
	id: OrderStepId;
	label: string;
};

export type Order = {
	id: string;
	/** Display form, e.g. "ORDER #RG-20471" */
	reference: string;
	placedAt: string;
	estimatedDelivery: string;
	/** e.g. "Thursday, Oct 15" */
	estimatedDeliveryLabel: string;
	/** e.g. "3 DAYS" */
	etaLabel: string;
	steps: Array<OrderStep>;
	currentStepId: OrderStepId;
	/** 0–1, drives the progress bar scaleX */
	progress: number;
	items: Array<CartItem>;
	summary: CartSummary;
};
