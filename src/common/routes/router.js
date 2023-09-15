import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import ROUTES from './routes';
import App from '../App';
import Home from '../../pages/Home';

// this is what will render in the Outlet of App
const router = createBrowserRouter(createRoutesFromElements(
	<Route path="/" element={<App />}>
		<Route index element={<Home />} />
		{/* <Route path={ROUTES.payments} element={<Payments />} /> */}
	</Route>
));
  
export default router;
