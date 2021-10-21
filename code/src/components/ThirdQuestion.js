import React from 'react';

const ThirdQuestion = ({ setPastry, chosenPastry, onStepChange }) => {


    const choosePastry =["Cakes 🍰", "Cookies 🍪", "Bread 🍞"];

    return (
        <div><p>Baking is Love made Edible, select want you want to learn: </p>
            <div className="wrapper-row">
            {choosePastry.map(pastry => (
                <label className="radiobutton-container" key={pastry}>
                <input aria-label="choose pastry"
                type="radio"
                id="cakes"
                value={pastry}
                onChange={event => setPastry(event)}
                checked={chosenPastry === pastry}
                />
                <span className="pastry-name">{pastry}</span>
                <span className="custom-radio"></span>
            </label>
            
            ))}
                    </div>

            </div >
            
	);
};

export default ThirdQuestion;


