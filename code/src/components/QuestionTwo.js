import React from "react";

// text input MUSIC
const QuestionTwo = ({nameInput, musicInput, onMusicInputChange, onNextStepChange, onStepBackChange}) => {
  return (
    <>
      <section className="head-section" id="two">
        <h2 className="answer-text">Hi {nameInput}!</h2>
        <p className="thin-intro-text">horribly hard question but..</p>
        <h2 className="question-text">Best song ever heard is?</h2>

        <form>
          <label htmlFor="musicInput"></label>
          <input
              id="musicInput"
              className="input-field"
              type="text"
              placeholder="Type here"
              value={musicInput}
              onChange={onMusicInputChange}
            />
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
            disabled= {musicInput === ""}
          >
            next
          </button>
        </div>
      </section>
    </>
  );
};

export default QuestionTwo;
