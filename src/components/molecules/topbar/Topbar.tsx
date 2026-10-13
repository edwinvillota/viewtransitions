import type { FC, ReactNode } from 'react';

interface TopbarProps {
	left?: ReactNode;
	center?: ReactNode;
	right?: ReactNode;
}

export const Topbar: FC<TopbarProps> = ({ left, center, right }) => {
	return (
		<div className="flex flex-row justify-between p-5 items-center">
			{left}
			{center}
			{right}
		</div>
	);
};
