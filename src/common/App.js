import React, { useContext } from "react";
import PopupContext from "../features/Popups/Popups.context";
import CreditCardInput from '../components/CreditCardInput/CreditCardInput'

import './styles/styles.css';
import './styles/animations.css';
import './styles/custom-elements.css';

function Test() {
	return (
		<h3>Testing Alerts</h3>
	)
}

export default function App() {
	const { showLightbox, showAlert, showConfirm } = useContext(PopupContext);

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
			<h2>Pop-ups</h2>
			<button className="button active dark" onClick={() => { showLightbox("Enter Card Details", CreditCardInput); }}>Run Card</button>
			<button
				className="button active dark"
				onClick={() => {
					showAlert("warn", "Testing Alert", Test)
					.then(() => {
						console.log("Callback");
					});
				}}
			>
			Test Alert
			</button>

			<button
				className="button active dark"
				onClick={() => {
					showConfirm("Testing Alert", "Do you want to continue?")
					.then((confirmed) => {
						console.log("Callback", confirmed);
					});
				}}
			>
			Test Confirm
			</button>
		</main>

		<footer></footer>
	</>
	);	  
}
