import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import ROUTES from './routes/routes';

import './styles/styles.css';
import './styles/animations.css';
import './styles/custom-elements.css';

export default function App() {
	return (
	<>
		<header>
			<nav className="navigation">
				<ul>
				<li>
					{/* <NavLink to={ROUTES.payments}>
					Payments
					</NavLink> */}
				</li>
				</ul>
			</nav>
		</header>

		<main>
			<Outlet />
		</main>

		<footer></footer>
	</>
	);	  
}
