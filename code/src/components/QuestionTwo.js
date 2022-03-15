import React from "react";

// text input MUSIC
const QuestionTwo = ({nameInput, musicInput, onMusicInputChange, onNextStepChange, onStepBackChange}) => {
  return (
    <>
      <section className="section" id="two">
        <h2>Hi {nameInput}, nice to meet you!</h2>
        <form>
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
            href="#two"
            className="btn"
          >
            back
          </button>

          <button
            type="submit"
            onClick={onNextStepChange}
            href="#two"
            className="btn"
          >
            next
          </button>
        </div>
      </section>
    </>
  );
};

export default QuestionTwo;
