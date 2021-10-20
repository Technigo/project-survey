import React from 'react';

const ThirdQuestion = ({ setPastry, chosenPastry, onStepChange }) => {


    const choosePastry =["Cookies 🍪 ", "Cakes 🍰", "Bread 🍞"];

    return (
            <div className="wrapper-col">
            <p>What would you like to learn to bake?</p>
            {choosePastry.map(pastry => (
                <label className="radiobutton-container" key={pastry}>
                <input aria-label="choose pastry"
                type="radio"
                value={pastry}
                onChange={event => setPastry(event)}
                checked={chosenPastry === pastry}
                />
                {pastry}
                <span className="custom-radio"></span>
            </label>
            ))}
            </div >
	);
};

export default ThirdQuestion;
