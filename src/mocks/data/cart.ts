import type { CartItem, Promo } from '@/common/types/Cart';

/**
 * Cart as shown on screen 03, newest first.
 * The RTX 5090 is the item just added from the detail screen (pin 03·1).
 */
export const MOCKED_CART_ITEMS: Array<CartItem> = [
	{
		id: 'cart-5090-founders',
		productId: 1,
		editionId: 'founders',
		quantity: 1,
		addedAt: '2026-10-12T15:42:10.000Z',
	},
	{
		id: 'cart-5080-oc',
		productId: 2,
		editionId: 'oc',
		quantity: 1,
		addedAt: '2026-10-12T15:30:02.000Z',
	},
	{
		id: 'cart-5070-founders',
		productId: 3,
		editionId: 'founders',
		quantity: 2,
		addedAt: '2026-10-11T21:08:45.000Z',
	},
];

/** Cart before the 5090 was added; badge shows 3 on screens 01 and 02. */
export const MOCKED_CART_ITEMS_BEFORE_ADD = MOCKED_CART_ITEMS.slice(1);

export const MOCKED_PROMOS: Array<Promo> = [
	{ code: 'BUILD10', percentOff: 10, label: 'Promo BUILD10' },
];

export const APPLIED_PROMO_CODE = 'BUILD10';
