import React from "react";
import "../buttons.css";

export const Button = ({ nextBtn, prevBtn }) => {
	return (
		<>
			<button className="btn next-btn" onClick={nextBtn}>
				Next
			</button>
			<button className="btn back-btn" onClick={prevBtn}></button>
		</>
	);
};

export const StartButton = ({ nextBtn }) => {
	return (
		<button className="btn next-btn" onClick={nextBtn}>
			Create card
		</button>
	);
};

export const SubmitButton = ({ nextBtn, prevBtn }) => {
	return (
		<>
			<button className="btn submit-btn" onClick={nextBtn}>
				Look at card
			</button>
			<button className="btn back-btn" onClick={prevBtn}></button>
		</>
	);
};

export const StartOverButton = ({ resetBtn }) => {
	return (
		<>
			<button className="btn reset-btn" onClick={resetBtn}>
				Start over?
			</button>
		</>
	);
};
