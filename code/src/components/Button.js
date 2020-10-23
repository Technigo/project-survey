import React from 'react';
import '../Styles/Button.css';

export const Button = ({ button, click, disabled, text }) => {
	return (
		<button type={button} onClick={click} disabled={disabled}>
			{text}
		</button>
	);
};
