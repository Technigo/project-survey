import React from 'react';

export const RadioButtonQ = ({ dogNumber, amountOfDogs, setAmountOfDogs }) => {
	return (
		<React.Fragment>
			<h2>How many dogs do you want:</h2>
			<img className="dogGif" src={require('../images/smartDog.gif')} alt="Dog looking smart" />
			<form>
				<div className="radioButtonContainer">
					{' '}
					{dogNumber.map((number) => (
						<label className="inputContainer" key={number}>
							<input
								className="personalizedInput"
								type="radio"
								value={number}
								onChange={(event) => setAmountOfDogs(event.target.value)}
								checked={amountOfDogs === number}
							/>
							<span className="checkmark" />
							{number}
						</label>
					))}
				</div>
			</form>
		</React.Fragment>
	);
};
