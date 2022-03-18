import React from "react";

const drinksArray = ["champagne", "milk", "beer", "hot chocolate"];

const QuestionFour = ({selectOptionInput, radioInput, onRadioInputChange, onNextStepChange, onStepBackChange}) => {
  return (
    <>
      <section className="head-section" id="four">
        <h2 className="answer-text">Mmm {selectOptionInput} is tasty!</h2>
        <h2 className="question-text">Drink that boost your mood?</h2>
        <form className="radio-button-form" onSubmit={onNextStepChange}>
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
    </>
  );
};

export default QuestionFour;
