import React from "react";

const drinksArray = ["Champagne", "Milk", "Beer", "Hot chocolate"];

const QuestionFour = ({radioInput, onRadioInputChange, onNextStepChange, onStepBackChange}) => {
  return (
    <>
    <main>
      <section className="head-section" id="four">
        <p>Question Four</p>
        <h2 className="header-text">Drink that boost your mood?</h2>
        <form>
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
        <div className="buttons">
            <button
              type="submit"
              aria-label="Go back"
              onClick={onStepBackChange}
              className="back-btn"
            >
              back
            </button>

            <button
              type="submit"
              onClick={onNextStepChange}
              className="next-btn"
              disabled= {radioInput === ""}
            >
              next
            </button>
          </div>
      </section>
    </main>
    </>
  );
};

export default QuestionFour;
