import React from "react";

// select option Input
const QuestionThree = ({musicInput, selectOptionInput, onSelectOptionInputChange, onNextStepChange, onStepBackChange}) => {
  return (
    <>
      <section className="head-section" id="three">
        <h2 className="answer-text">Mhm {musicInput},</h2>
        <p className="thin-intro-text">SOUNDS GOOD!</p>
        <h2 className="question-text">What food makes you the happiest self?</h2>
        <form onSubmit={onNextStepChange}>
          <label htmlFor="selectOptionInput" className="sr-only">Favourite food:</label>
          <select
            className= "dropdown"
            onChange={onSelectOptionInputChange}
            value= {selectOptionInput}
          >
            <option className="option-input" value="" disabled selected>
             Have your pick!
            </option>

            <option className="option-input" value="candy">
              Candy
            </option>

            <option className="option-input" value="pasta">
              Pasta
            </option>

            <option className="option-input" value="vegetables">
              Vegetables
            </option>

            <option className="option-input" value="ice cream">
              Ice Cream
            </option>
          </select>
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
            disabled= {selectOptionInput === ""}
          >
            next
          </button>
        </div>
      </section>
    </>
  );
};

export default QuestionThree;
