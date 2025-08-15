import { StyledEngineProvider } from '@mui/material/styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom';

import Films from './films';
import Games from './games';
import PageNotFound from './notfoundpage';
import Videos from './videos';

function AppRoutes() {
	const routes = useRoutes([
		// { path: '/', element: <Home /> },
		{ path: '/', element: <Navigate to="/films" replace /> },
		{ path: '/films', element: <Films /> },
		{ path: '/games', element: <Games /> },
		{ path: '/videos', element: <Videos /> },
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
