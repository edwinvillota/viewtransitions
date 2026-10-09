import { BrowserRouter, Route, Routes } from 'react-router';
import { HomeScreen } from '@/screens';

const Router = () => {
	return (
		<BrowserRouter useTransitions>
			<Routes>
				<Route index element={<HomeScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
