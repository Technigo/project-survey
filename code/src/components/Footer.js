import React from "react";

import "../footer.css";

export const Footer = ({ step, setStep }) => {
	if (step === 0 || step === 8) {
	} else {
	}

	return (
		<footer>
			<div
				className="square"
				style={{
					backgroundColor: step >= 1 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
				onClick={() => setStep(1)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 2 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 2 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
				onClick={() => setStep(2)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 3 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 3 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
				onClick={() => setStep(3)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 4 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 4 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
				onClick={() => setStep(4)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 5 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 5 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
				onClick={() => setStep(5)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 6 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 6 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
				onClick={() => setStep(6)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 7 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 7 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
				onClick={() => setStep(7)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 8 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 8 ? "var(--clr-dark)" : "var(--clr-light)",
				}}
				onClick={() => setStep(8)}
			></div>
		</footer>
	);
};
