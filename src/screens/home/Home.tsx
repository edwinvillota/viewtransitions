import { Search } from 'lucide-react';
import { MOCKED_PRODUCTS } from '@/common/mocks/product_list';
import { Chip } from '@/components/atoms';
import { BottomNav } from '@/components/organisms';
import { MainTemplate } from '@/components/templates';
import { ProductsGrid } from './components/products_grid';

const Logo = () => {
	return (
		<span className="font-black font-(family-name:--font-display) text-2xl">
			RIG/
		</span>
	);
};

const Avatar = () => {
	return (
		<span
			role="img"
			aria-label="Edwin Villota"
			className="flex justify-center items-center rounded-full w-[36px] aspect-square bg-black text-white text-xs font-bold"
		>
			EV
		</span>
	);
};

const Title = () => {
	return (
		<div className="flex flex-col gap-1">
			<span className="uppercase text-(--color-muted) tracking-wider font-extralight font-(family-name:--font-mono)">
				148 parts in stock
			</span>
			<h1 className="font-(family-name:--font-display) text-4xl">
				Build your next rig
			</h1>
		</div>
	);
};

const SearchInput = () => {
	return (
		<search className="flex flex-row rounded-xl bg-white border border-(--color-line) min-h-12 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-black">
			<div className="w-12 shrink-0 flex items-center justify-center">
				<Search className="text-(--color-muted)" size={20} />
			</div>
			<input
				type="search"
				aria-label="Search parts"
				className="w-full appearance-none focus:outline-none"
				placeholder="Search GPUs, CPUs, memory..."
			/>
		</search>
	);
};

const Chips = () => {
	return (
		<fieldset aria-label="Filter by category" className="flex flex-row gap-2">
			<Chip active>GPUs</Chip>
			<Chip>CPUs</Chip>
			<Chip>Memory</Chip>
			<Chip>Storage</Chip>
		</fieldset>
	);
};

const HomeScreen = () => {
	return (
		<MainTemplate.Root>
			<MainTemplate.Header left={<Logo />} right={<Avatar />} />
			<MainTemplate.Content>
				<Title />
				<SearchInput />
				<Chips />
				<ProductsGrid items={MOCKED_PRODUCTS} />
			</MainTemplate.Content>
			<MainTemplate.Footer>
				<BottomNav />
			</MainTemplate.Footer>
		</MainTemplate.Root>
	);
};

export default HomeScreen;
