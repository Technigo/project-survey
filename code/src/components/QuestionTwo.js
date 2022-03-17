import React from "react";

// text input MUSIC
const QuestionTwo = ({nameInput, musicInput, onMusicInputChange, onNextStepChange, onStepBackChange}) => {
  return (
    <>
      <section className="head-section" id="two">
        <h2 className="answer-text">Hi {nameInput}!</h2>
        <p className="thin-intro-text">Might be the most horrible question but:</p>
        <h2 className="question-text">Best song ever heard is?</h2>

        <form>
          <label htmlFor="musicInput">Type your fav song here</label>
          <input
              id="musicInput"
              type="text"
              value={musicInput}
              onChange={onMusicInputChange}
            />
        </form>
        <div className="buttons">
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
