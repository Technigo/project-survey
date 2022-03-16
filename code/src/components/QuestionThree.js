import React from "react";

// select option Input
const QuestionThree = ({selectOptionInput, onSelectOptionInputChange, onNextStepChange, onStepBackChange}) => {
  return (
    <>
    <main>
      <section className="head-section" id="three">
        <p>Question Three</p>
        <h2 className="header-text">What food makes you the happiest self?</h2>
        <form>
          <label htmlFor="selectOptionInput">Have your pick</label>
          <select
            className= "dropdown"
            onChange={onSelectOptionInputChange}
            value= {selectOptionInput}
          >
            <option className="option-input" value="">
              Select
            </option>

            <option className="option-input" value="Candy">
              Candy
            </option>

            <option className="option-input" value="Pasta">
              Pasta
            </option>

            <option className="option-input" value="Vegetables">
              Vegetables
            </option>

            <option className="option-input" value="Ice Cream">
              Ice Cream
            </option>
          </select>
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
            disabled= {selectOptionInput === ""}
          >
            next
          </button>
        </div>
      </section>
    </main>
    </>
  );
};

export default QuestionThree;
