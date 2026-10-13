import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { useId, ViewTransition } from 'react';

interface ChipProps extends PropsWithChildren {
	active?: boolean;
	handleClick?: () => void;
}

export const Chip: FC<ChipProps> = ({ children, active, handleClick }) => {
	const id = useId();
	return (
		<button
			type="button"
			aria-pressed={active}
			onClick={handleClick}
			className={clsx(
				'flex relative py-2 px-3.5 rounded-3xl font-(family-name:--font-body) font-semibold border bg-white border-line',
			)}
		>
			{active && (
				<ViewTransition name="chip-pill">
					<span className="absolute bg-black rounded-3xl inset-0"></span>
				</ViewTransition>
			)}
			<ViewTransition name={`chip-pill-${id}`} default="chip-label">
				<span className={clsx('relative', active && 'text-white')}>
					{children}
				</span>
			</ViewTransition>
		</button>
	);
};
