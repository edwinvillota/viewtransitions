import { Outlet, useNavigate } from 'react-router';

export const DetailsTemplate = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-row bg-slate-200 w-fit px-3 py-2">
				<button type="button" onClick={handleGoBack}>
					Atras
				</button>
			</div>
			<Outlet></Outlet>
		</div>
	);
};
