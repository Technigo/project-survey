import React from 'react';

export const Compilation = props => {
	return (
		<div className='compilation'>
			<h1>Oh yeah!</h1>
			<p>
				We are going to have such a great time {props.name}! Going to the{' '}
				{props.activity}, eating {props.food} and drinking {props.drinks}. The
				estimation of the amount of fun tonight is set to {props.fun}/10
			</p>
		</div>
	);
};
