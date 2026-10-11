import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';

interface ChipProps extends PropsWithChildren {
	active?: boolean;
}

export const Chip: FC<ChipProps> = ({ children, active }) => {
	return (
		<div
			className={clsx(
				'flex py-2 px-3.5 rounded-3xl font-(family-name:--font-body) font-semibold',
				{
					'bg-black text-white': active,
					'bg-white border border-(--color-line)': !active,
				},
			)}
		>
			{children}
		</div>
	);
};
