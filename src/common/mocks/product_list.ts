import coreUltra9285k from '@/assets/images/products/core-ultra-9-285k.jpg';
import ddr56000 from '@/assets/images/products/ddr5-6000-32gb.jpg';
import ddr56400 from '@/assets/images/products/ddr5-6400-64gb.jpg';
import nvmeGen42tb from '@/assets/images/products/nvme-gen4-2tb.jpg';
import nvmeGen54tb from '@/assets/images/products/nvme-gen5-4tb.jpg';
import rtx5060 from '@/assets/images/products/rtx-5060.jpg';
import rtx5070 from '@/assets/images/products/rtx-5070.jpg';
import rtx5080 from '@/assets/images/products/rtx-5080.jpg';
import rtx5090 from '@/assets/images/products/rtx-5090.jpg';
import ryzen99950x3d from '@/assets/images/products/ryzen-9-9950x3d.jpg';
import type { Edition, Product } from '@/common/types/Products';

const gpuEditions = (ocDeltaCents: number): [Edition, Edition] => [
	{ id: 'founders', label: 'Founders', priceDeltaCents: 0 },
	{ id: 'oc', label: 'OC Edition', priceDeltaCents: ocDeltaCents },
];

/** The design shows four gallery dots; every product repeats its render. */
const gallery = (image: string) => [image, image, image, image];

export const MOCKED_PRODUCTS: Array<Product> = [
	{
		id: 1,
		slug: 'rtx-5090',
		label: 'RTX 5090',
		categoryId: 'gpu',
		category: 'Graphics card',
		cardMeta: 'GPU · 32 GB',
		detailMeta: 'GPU · 32 GB GDDR7',
		breadcrumb: 'GPUs / Flagship',
		shortDescription:
			'The fastest consumer card for 4K path tracing and local AI.',
		description:
			'Blackwell flagship with fifth-gen Tensor cores and DLSS 4. Built for 4K path tracing and local AI models that need the full 32 GB.',
		priceCents: 199_900,
		image: rtx5090,
		imageAlt: 'Matte black triple-fan RTX 5090 graphics card',
		gallery: gallery(rtx5090),
		editions: gpuEditions(15_000),
		specs: [
			{ label: 'Memory', value: 32, decimals: 0, unit: 'GB' },
			{ label: 'Power', value: 575, decimals: 0, unit: 'W' },
			{ label: 'CUDA cores', value: 21.7, decimals: 1, unit: 'K' },
		],
		stock: 6,
	},
	{
		id: 2,
		slug: 'rtx-5080',
		label: 'RTX 5080',
		categoryId: 'gpu',
		category: 'Graphics card',
		cardMeta: 'GPU · 16 GB',
		detailMeta: 'GPU · 16 GB GDDR7',
		breadcrumb: 'GPUs / High end',
		shortDescription: 'High refresh 4K gaming without the flagship price.',
		description:
			'Same Blackwell architecture as the 5090 in a smaller power envelope. Comfortable at 4K with DLSS 4 frame generation and quiet under load.',
		priceCents: 99_900,
		image: rtx5080,
		imageAlt: 'Silver and black RTX 5080 graphics card',
		gallery: gallery(rtx5080),
		editions: gpuEditions(8_000),
		specs: [
			{ label: 'Memory', value: 16, decimals: 0, unit: 'GB' },
			{ label: 'Power', value: 360, decimals: 0, unit: 'W' },
			{ label: 'CUDA cores', value: 10.8, decimals: 1, unit: 'K' },
		],
		stock: 14,
	},
	{
		id: 3,
		slug: 'rtx-5070',
		label: 'RTX 5070',
		categoryId: 'gpu',
		category: 'Graphics card',
		cardMeta: 'GPU · 12 GB',
		detailMeta: 'GPU · 12 GB GDDR7',
		breadcrumb: 'GPUs / Mainstream',
		shortDescription: 'The 1440p sweet spot for most builds.',
		description:
			'A two-slot card that fits almost any case. Strong 1440p performance, DLSS 4 support and a 250 W draw that a 650 W power supply handles easily.',
		priceCents: 54_900,
		image: rtx5070,
		imageAlt: 'Black RTX 5070 graphics card with grey accents',
		gallery: gallery(rtx5070),
		editions: gpuEditions(5_000),
		specs: [
			{ label: 'Memory', value: 12, decimals: 0, unit: 'GB' },
			{ label: 'Power', value: 250, decimals: 0, unit: 'W' },
			{ label: 'CUDA cores', value: 6.1, decimals: 1, unit: 'K' },
		],
		stock: 22,
	},
	{
		id: 4,
		slug: 'rtx-5060',
		label: 'RTX 5060',
		categoryId: 'gpu',
		category: 'Graphics card',
		cardMeta: 'GPU · 8 GB',
		detailMeta: 'GPU · 8 GB GDDR7',
		breadcrumb: 'GPUs / Entry',
		shortDescription: 'Compact 1080p card for small form factor builds.',
		description:
			'Dual-fan and short enough for mini-ITX cases. A good first card for 1080p esports titles with a 145 W draw.',
		priceCents: 29_900,
		image: rtx5060,
		imageAlt: 'Compact dual-fan RTX 5060 graphics card',
		gallery: gallery(rtx5060),
		editions: gpuEditions(3_000),
		specs: [
			{ label: 'Memory', value: 8, decimals: 0, unit: 'GB' },
			{ label: 'Power', value: 145, decimals: 0, unit: 'W' },
			{ label: 'CUDA cores', value: 3.8, decimals: 1, unit: 'K' },
		],
		stock: 31,
	},
	{
		id: 5,
		slug: 'ryzen-9-9950x3d',
		label: 'Ryzen 9 9950X3D',
		categoryId: 'cpu',
		category: 'Processor',
		cardMeta: 'CPU · 16 cores',
		detailMeta: 'CPU · 16 cores · AM5',
		breadcrumb: 'CPUs / Flagship',
		shortDescription: '16 cores with 3D V-Cache for gaming and rendering.',
		description:
			'Stacked cache on both dies gives it top gaming frame rates while 16 Zen 5 cores handle rendering and compiling. Socket AM5, no cooler included.',
		priceCents: 69_900,
		image: ryzen99950x3d,
		imageAlt: 'Ryzen 9 desktop processor, top view of the heat spreader',
		gallery: gallery(ryzen99950x3d),
		editions: [
			{ id: 'boxed', label: 'Boxed', priceDeltaCents: 0 },
			{ id: 'tray', label: 'Tray', priceDeltaCents: -2_000 },
		],
		specs: [
			{ label: 'Cores', value: 16, decimals: 0, unit: '' },
			{ label: 'Boost', value: 5.7, decimals: 1, unit: 'GHz' },
			{ label: 'TDP', value: 170, decimals: 0, unit: 'W' },
		],
		stock: 12,
	},
	{
		id: 6,
		slug: 'core-ultra-9-285k',
		label: 'Core Ultra 9 285K',
		categoryId: 'cpu',
		category: 'Processor',
		cardMeta: 'CPU · 24 cores',
		detailMeta: 'CPU · 24 cores · LGA 1851',
		breadcrumb: 'CPUs / Flagship',
		shortDescription: '24 cores for heavy multitasking and creative work.',
		description:
			'Eight performance and sixteen efficient cores with an on-chip NPU. Runs cooler than previous generations at a 125 W base power.',
		priceCents: 58_900,
		image: coreUltra9285k,
		imageAlt: 'Core Ultra desktop processor with a silver heat spreader',
		gallery: gallery(coreUltra9285k),
		editions: [
			{ id: 'boxed', label: 'Boxed', priceDeltaCents: 0 },
			{ id: 'tray', label: 'Tray', priceDeltaCents: -2_000 },
		],
		specs: [
			{ label: 'Cores', value: 24, decimals: 0, unit: '' },
			{ label: 'Boost', value: 5.7, decimals: 1, unit: 'GHz' },
			{ label: 'Base power', value: 125, decimals: 0, unit: 'W' },
		],
		stock: 9,
	},
	{
		id: 7,
		slug: 'ddr5-6400-64gb',
		label: 'DDR5-6400 64 GB',
		categoryId: 'memory',
		category: 'Memory kit',
		cardMeta: 'RAM · 2 × 32 GB',
		detailMeta: 'RAM · 2 × 32 GB · CL32',
		breadcrumb: 'Memory / Performance',
		shortDescription: 'Two 32 GB sticks for workstations and big projects.',
		description:
			'A matched pair tuned for 6400 MT/s with EXPO and XMP profiles. Low-profile heatsinks clear large air coolers.',
		priceCents: 21_900,
		image: ddr56400,
		imageAlt: 'Pair of black DDR5 memory sticks',
		gallery: gallery(ddr56400),
		editions: [
			{ id: 'black', label: 'Black', priceDeltaCents: 0 },
			{ id: 'white', label: 'White', priceDeltaCents: 1_000 },
		],
		specs: [
			{ label: 'Capacity', value: 64, decimals: 0, unit: 'GB' },
			{ label: 'Speed', value: 6400, decimals: 0, unit: 'MT/s' },
			{ label: 'Latency', value: 32, decimals: 0, unit: 'CL' },
		],
		stock: 18,
	},
	{
		id: 8,
		slug: 'ddr5-6000-32gb',
		label: 'DDR5-6000 32 GB',
		categoryId: 'memory',
		category: 'Memory kit',
		cardMeta: 'RAM · 2 × 16 GB',
		detailMeta: 'RAM · 2 × 16 GB · CL30',
		breadcrumb: 'Memory / Gaming',
		shortDescription: 'The gaming sweet spot for AM5 and Intel builds.',
		description:
			'6000 MT/s at CL30 is the speed most gaming boards run without tuning. Includes a one-click EXPO profile.',
		priceCents: 10_900,
		image: ddr56000,
		imageAlt: 'Pair of white DDR5 memory sticks',
		gallery: gallery(ddr56000),
		editions: [
			{ id: 'white', label: 'White', priceDeltaCents: 0 },
			{ id: 'black', label: 'Black', priceDeltaCents: 0 },
		],
		specs: [
			{ label: 'Capacity', value: 32, decimals: 0, unit: 'GB' },
			{ label: 'Speed', value: 6000, decimals: 0, unit: 'MT/s' },
			{ label: 'Latency', value: 30, decimals: 0, unit: 'CL' },
		],
		stock: 24,
	},
	{
		id: 9,
		slug: 'nvme-gen5-4tb',
		label: 'NVMe Gen5 4 TB',
		categoryId: 'storage',
		category: 'SSD',
		cardMeta: 'SSD · 4 TB',
		detailMeta: 'SSD · 4 TB · PCIe 5.0',
		breadcrumb: 'Storage / Gen5',
		shortDescription: 'PCIe 5.0 speeds for huge game libraries and video.',
		description:
			'Sequential reads up to 14.5 GB/s. Ships with a finned heatsink; skip it if your motherboard has its own M.2 cover.',
		priceCents: 44_900,
		image: nvmeGen54tb,
		imageAlt: 'M.2 NVMe SSD with a black finned heatsink',
		gallery: gallery(nvmeGen54tb),
		editions: [
			{ id: 'heatsink', label: 'Heatsink', priceDeltaCents: 0 },
			{ id: 'bare', label: 'Bare', priceDeltaCents: -2_000 },
		],
		specs: [
			{ label: 'Capacity', value: 4, decimals: 0, unit: 'TB' },
			{ label: 'Read', value: 14.5, decimals: 1, unit: 'GB/s' },
			{ label: 'Endurance', value: 2400, decimals: 0, unit: 'TBW' },
		],
		stock: 5,
	},
	{
		id: 10,
		slug: 'nvme-gen4-2tb',
		label: 'NVMe Gen4 2 TB',
		categoryId: 'storage',
		category: 'SSD',
		cardMeta: 'SSD · 2 TB',
		detailMeta: 'SSD · 2 TB · PCIe 4.0',
		breadcrumb: 'Storage / Gen4',
		shortDescription: 'Fast, affordable boot drive for any build.',
		description:
			'Reads up to 7.4 GB/s, which is more than any game needs to load quickly today. Single-sided, so it fits laptops too.',
		priceCents: 14_900,
		image: nvmeGen42tb,
		imageAlt: 'Bare M.2 2280 NVMe SSD',
		gallery: gallery(nvmeGen42tb),
		editions: [
			{ id: 'bare', label: 'Bare', priceDeltaCents: 0 },
			{ id: 'heatsink', label: 'Heatsink', priceDeltaCents: 2_000 },
		],
		specs: [
			{ label: 'Capacity', value: 2, decimals: 0, unit: 'TB' },
			{ label: 'Read', value: 7.4, decimals: 1, unit: 'GB/s' },
			{ label: 'Endurance', value: 1200, decimals: 0, unit: 'TBW' },
		],
		stock: 7,
	},
];

/** "148 PARTS IN STOCK" on the catalog header */
export const TOTAL_STOCK = MOCKED_PRODUCTS.reduce(
	(total, product) => total + product.stock,
	0,
);

export const findProduct = (id: Product['id']) =>
	MOCKED_PRODUCTS.find((product) => product.id === id);
