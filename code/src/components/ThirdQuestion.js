import React from 'react';

const ThirdQuestion = ({ setPastry, chosenPastry, onStepChange }) => {


    const choosePastry =["Cookies", "Cakes", "Bread"];

    return (
		<form>
            What do you like to learn to bake?:
            {choosePastry.map(pastry => (
                <label key={pastry}>
                <input
                type="radio"
                value={pastry}
                onChange={event => setPastry(event)}
                checked={chosenPastry === pastry}
                />
                {pastry}
            </label>
            ))}
			<button type="button" onClick={onStepChange}>Next question</button>
            </form >
	);
};

export default ThirdQuestion;
