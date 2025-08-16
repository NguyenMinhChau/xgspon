import { StyledEngineProvider } from '@mui/material/styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import Films from './films';
import Games from './games';
import Home from './home';
import PageNotFound from './notfoundpage';
import OperatingSystems from './operating-systems';

function AppRoutes() {
	const routes = useRoutes([
		// { path: '/', element: <Navigate to="/films" replace /> },
		{ path: '/', element: <Home /> },
		{ path: '/films', element: <Films /> },
		{ path: '/games', element: <Games /> },
		{ path: '/operating-systems', element: <OperatingSystems /> },
		{ path: '*', element: <PageNotFound /> },
	]);
	return routes;
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</StyledEngineProvider>
	</React.StrictMode>,
);
