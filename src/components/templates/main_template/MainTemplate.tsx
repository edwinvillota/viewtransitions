import { Outlet } from 'react-router';

export const MainTemplate = () => {
	return (
		<>
			<nav className="flex flex-row justify-between p-4 bg-slate-500 text-white">
				<h1>MyProducts app</h1>
				<ul className="flex flex-row gap-3">
					<li>Link 1</li>
					<li>Link 2</li>
					<li>Link 3</li>
					<li>Link 4</li>
				</ul>
			</nav>
			<main className="flex flex-col p-4">
				<Outlet />
			</main>
		</>
	);
};
