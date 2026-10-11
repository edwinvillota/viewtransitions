import clsx from 'clsx';
import { Heart, Search, ShoppingBag, Store } from 'lucide-react';
import { type FC, type ReactNode, useId, useState } from 'react';

interface ButtonNavButtonConfig {
	icon: ReactNode;
	label: string;
}

interface ButtonNavButtonProps {
	config: ButtonNavButtonConfig;
	active?: boolean;
	pendingCounter?: number;
}

const BOTTOM_NAV_ICON_SIZE = 24;

const BOTTOM_NAV_BUTTONS: ButtonNavButtonConfig[] = [
	{
		icon: <Store size={BOTTOM_NAV_ICON_SIZE} />,
		label: 'Shop',
	},
	{
		icon: <Search size={BOTTOM_NAV_ICON_SIZE} />,
		label: 'Search',
	},
	{
		icon: <ShoppingBag size={BOTTOM_NAV_ICON_SIZE} />,
		label: 'Cart',
	},
	{
		icon: <Heart size={BOTTOM_NAV_ICON_SIZE} />,
		label: 'Saved',
	},
];

const BottomNavButton: FC<ButtonNavButtonProps> = ({
	config,
	active,
	pendingCounter = 0,
}) => {
	const isPending = pendingCounter > 0;
	const { icon, label } = config;
	return (
		<button
			type="button"
			className={clsx(
				'flex flex-col flex-1 justify-center items-center p-1 rounded-4xl relative',
				{
					'bg-(--color-accent-soft) text-(--color-accent)': active,
					'text-(--color-muted)': !active,
				},
			)}
		>
			{icon}
			<span className="text-xs font-(family-name:--font-sans) font-semibold">
				{label}
			</span>
			{isPending && (
				<span className="flex h-5 aspect-square bg-(--color-accent) absolute rounded-full border-2 border-white top-1.5 left-[calc(50%+2px)] justify-center items-center text-[10px] text-white font-bold leading-none pl-[1px]">
					{pendingCounter}
				</span>
			)}
		</button>
	);
};

export const BottomNav = () => {
	const baseId = useId();

	const [activeButton, setActiveButton] = useState(
		`${baseId}-${BOTTOM_NAV_BUTTONS[0].label}`,
	);

	const getMockedCounter = (label: string): number => {
		if (label === BOTTOM_NAV_BUTTONS[2].label) return 2;
		return 0;
	};

	return (
		<div className="flex px-4 pb-2.5">
			<nav className="flex h-16 drop-shadow-lg bg-white w-full rounded-4xl p-1.5 gap-1">
				{BOTTOM_NAV_BUTTONS.map((button) => (
					<BottomNavButton
						key={`${baseId}-${button.label}`}
						config={button}
						active={`${baseId}-${button.label}` === activeButton}
						pendingCounter={getMockedCounter(button.label)}
					/>
				))}
			</nav>
		</div>
	);
};
