import React from 'react';

export const DropDownQ = ({ dog, setDog }) => {
	return (
		<React.Fragment>
			<h2>What is your favourite type of animal?</h2>
			<img className="dogGif" src={require('../images/hiFiveDog.gif')} alt="Dog giving a high five" />
			<form>
				<select type="text" onChange={(event) => setDog(event.target.value)} value={dog}>
					<option value="">Choose an animal</option>
					<option value="Tame wolf">Tame wolf</option>
					<option value="Dog">Dog</option>
					<option value="Canis domesticus">Canis domesticus</option>
				</select>
			</form>
		</React.Fragment>
	);
};
