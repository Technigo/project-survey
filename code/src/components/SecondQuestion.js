import React from "react";

export const SecondQuestion = ({ flavours, setFlavours}) => {
    flavourInput,
    onFlavourInputChange
    return (
        <div className='step-container'>
        <progress
          className='progress-bar'
          id='survey'
          value='2'
          max='6'
        ></progress>
        <h2 className="intro-text">Let us start by knowing moore about your flavour preferences</h2>
        <h3>Which flavour do you like the most?</h3>

        <label className="radio-section">
            <h4>Chocolate</h4>
            <input
            className="radio-button"
            type="radio"
            value="Chocolate"
            onChange={onFlavourInputChange}
            checked={flavourInput === "Chocolate"}
            />
            <span class="checkmark"></span>
            </label>
        
            <label className="radio-section">
            <h4>Lemon</h4>
            <input
            className="radio-button"
            type="radio"
            value="Lemon"
            onChange={onFlavourInputChange}
            checked={flavourInput === "Lemon"}
            />
            <span class="checkmark"></span>
        </label>

        <label className="radio-section">
            <h4>Pistachio</h4>
            <input
            className="radio-button"
            type="radio"
            value="Pistachio"
            onChange={onFlavourInputChange}
            checked={flavourInput === "Pistachio"}
            />
            <span class="checkmark"></span>
        </label>

        <div className="buttons">
<button onClick={onPrevQuestionChange}>Previous question</button>
<button className="next-question" onClick={onStepChange}>Next question</button>
        </div>
        </div>
    );
};

export default SecondQuestion;