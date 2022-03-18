import React from "react";

const drinksArray = ["Champagne", "Milk", "Beer", "Hot chocolate"];

const QuestionFour = ({selectOptionInput, radioInput, onRadioInputChange, onNextStepChange, onStepBackChange}) => {
  return (
    <div className="drink-wrapper">
      <section className="head-section-four" id="four">
        <h2 className="answer-text">Mmm {selectOptionInput} is tasty!</h2>
        <h2 className="question-text">Drink that boost your mood?</h2>
        <form className="radio-button-form">
          {drinksArray.map(drinks => (
            <label className="radio-label" key={drinks} htmlFor={drinks}>
              <input
                className="radio-button"
                id= {drinks}
                type="radio"
                value={drinks}
                onChange={onRadioInputChange}
                checked={drinks === radioInput}
              />  
              {drinks}
            </label>
          ))}
        </form>
        <div className="buttons-wrapper">
            <button
              type="submit"
              aria-label="Go back"
              onClick={onStepBackChange}
              className="btn back-btn"
            >
              back
            </button>

            <button
              type="submit"
              onClick={onNextStepChange}
              className="btn next-btn"
              disabled= {radioInput === ""}
            >
              next
            </button>
          </div>
      </section>
    </div>
  );
};

export default QuestionFour;
