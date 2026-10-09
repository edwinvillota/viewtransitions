import { ViewTransition } from 'react';
import { Outlet, useNavigate } from 'react-router';

export const DetailsTemplate = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};
	return (
		<div className="flex flex-col gap-2">
			<ViewTransition name="page-title">
				<button
					type="button"
					onClick={handleGoBack}
					className="w-fit bg-slate-200 px-3 py-2"
				>
					Atras
				</button>
			</ViewTransition>
			<Outlet />
		</div>
	);
};
