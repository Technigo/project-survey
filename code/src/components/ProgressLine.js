import React from "react";

import "../progressline.css";

export const ProgressLine = ({ step, setStep }) => {
	if (step === 0 || step === 8) {
	} else {
	}

	return (
		<footer>
			<div
				className="square"
				style={{
					backgroundColor: step >= 1 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
				onClick={() => setStep(1)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 2 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 2 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
				onClick={() => setStep(2)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 3 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 3 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
				onClick={() => setStep(3)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 4 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 4 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
				onClick={() => setStep(4)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 5 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 5 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
				onClick={() => setStep(5)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 6 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 6 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
				onClick={() => setStep(6)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 7 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 7 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
				onClick={() => setStep(7)}
			></div>
			<div
				className="line"
				style={{
					backgroundColor: step >= 8 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
			></div>
			<div
				className="square"
				style={{
					backgroundColor: step >= 8 ? "var(--clr-black)" : "var(--clr-gray)",
				}}
				onClick={() => setStep(8)}
			></div>
		</footer>
	);
};
