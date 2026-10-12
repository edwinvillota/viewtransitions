import { MOCKED_PRODUCTS } from '@/common/mocks/product_list';
import type { Order } from '@/common/types/Order';
import { getCartSummary } from '@/common/utils/money';
import { MOCKED_CART_ITEMS, MOCKED_PROMOS } from './cart';

export const MOCKED_ORDER: Order = {
	id: 'RG-20471',
	reference: 'ORDER #RG-20471',
	placedAt: '2026-10-12T15:44:31.000Z',
	estimatedDelivery: '2026-10-15',
	estimatedDeliveryLabel: 'Thursday, Oct 15',
	etaLabel: '3 DAYS',
	steps: [
		{ id: 'placed', label: 'Placed' },
		{ id: 'packed', label: 'Packed' },
		{ id: 'shipped', label: 'Shipped' },
		{ id: 'delivered', label: 'Delivered' },
	],
	currentStepId: 'placed',
	progress: 0.25,
	items: MOCKED_CART_ITEMS,
	summary: getCartSummary(MOCKED_CART_ITEMS, MOCKED_PRODUCTS, MOCKED_PROMOS[0]),
};
