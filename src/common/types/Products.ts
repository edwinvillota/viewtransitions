export type CategoryId = 'gpu' | 'cpu' | 'memory' | 'storage';

export type Category = {
	id: CategoryId;
	/** Filter chip label, e.g. "GPUs" */
	label: string;
	/** Section heading above the grid, e.g. "Graphics cards" */
	sectionTitle: string;
	/** Short code used in card meta, e.g. "GPU" */
	code: string;
};

export type ProductSpec = {
	label: string;
	/** Numeric target for the count-up animation */
	value: number;
	/** Decimal places to keep while counting */
	decimals: number;
	unit: string;
};

export type Edition = {
	id: string;
	label: string;
	/** Added to the product base price, in cents */
	priceDeltaCents: number;
};

export type Product = {
	id: number;
	slug: string;
	label: string;
	categoryId: CategoryId;
	/** Human readable category, e.g. "Graphics card" */
	category: string;
	/** Card meta line, e.g. "GPU · 32 GB" */
	cardMeta: string;
	/** Detail meta line, e.g. "GPU · 32 GB GDDR7" */
	detailMeta: string;
	/** Detail top bar breadcrumb, e.g. "GPUs / Flagship" */
	breadcrumb: string;
	shortDescription: string;
	description: string;
	/** Base price in cents, avoids floating point errors in totals */
	priceCents: number;
	image: string;
	imageAlt: string;
	/** Detail gallery; one entry per gallery dot */
	gallery: Array<string>;
	/** First entry is the default selection */
	editions: [Edition, Edition];
	/** Exactly three tiles on the detail screen */
	specs: [ProductSpec, ProductSpec, ProductSpec];
	stock: number;
};
