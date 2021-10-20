import React from 'react';

const ThirdQuestion = ({ setPastry, chosenPastry, onStepChange }) => {


    const choosePastry =["Cookies 🍪 ", "Cakes 🍰", "Bread 🍞"];

    return (
            <div class="wrapper-col">
            What do you like to learn to bake?
            {choosePastry.map(pastry => (
                <label className="radiobutton-container" key={pastry}>
                <input 
                type="radio"
                value={pastry}
                onChange={event => setPastry(event)}
                checked={chosenPastry === pastry}
                />
                {pastry}
                <span class="custom-radio"></span>
            </label>
            ))}
            </div >
	);
};

export default ThirdQuestion;
