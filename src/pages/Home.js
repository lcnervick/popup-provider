import React, { useContext } from "react";
import CreditCardInput from "../components/CreditCardInput/CreditCardInput";
import PopupContext from "../features/Popups/Popups.context";

function Test() {
	return (
			<span>Testing this thing</span>
	);
}

export default function Home() {
	const { showLightbox, showAlert, showConfirm } = useContext(PopupContext);

	return (
		<div>
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
		</div>
	);
}
