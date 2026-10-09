import type { CartItem, CartSummary, Promo } from '@/common/types/Cart';
import type { Product } from '@/common/types/Products';

const wholeDollars = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0,
});
const withCents = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

/** 199900 → "$1,999", 375840 → "$3,758.40" */
export const formatPrice = (cents: number) =>
	cents % 100 === 0
		? wholeDollars.format(cents / 100)
		: withCents.format(cents / 100);

/** Discount lines use a real minus sign: "−$417.60" */
export const formatDiscount = (cents: number) =>
	`−${formatPrice(Math.abs(cents))}`;

export const FREE_SHIPPING_THRESHOLD_CENTS = 50_000;
export const SHIPPING_CENTS = 1_500;

export const getUnitPriceCents = (
	product: Product,
	editionId: CartItem['editionId'],
) => {
	const edition = product.editions.find((item) => item.id === editionId);
	return product.priceCents + (edition?.priceDeltaCents ?? 0);
};

export const getCartSummary = (
	items: Array<CartItem>,
	products: Array<Product>,
	promo?: Promo,
): CartSummary => {
	const subtotalCents = items.reduce((total, item) => {
		const product = products.find(({ id }) => id === item.productId);
		if (!product) return total;
		return total + getUnitPriceCents(product, item.editionId) * item.quantity;
	}, 0);

	const discountCents = promo
		? Math.round((subtotalCents * promo.percentOff) / 100)
		: 0;
	const shippingCents =
		subtotalCents === 0 || subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS
			? 0
			: SHIPPING_CENTS;

	return {
		itemCount: items.reduce((total, item) => total + item.quantity, 0),
		subtotalCents,
		discountCents,
		shippingCents,
		totalCents: subtotalCents - discountCents + shippingCents,
	};
};
