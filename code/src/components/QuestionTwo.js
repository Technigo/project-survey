import React from "react";

// text input MUSIC
const QuestionTwo = ({nameInput, musicInput, onMusicInputChange, onNextStepChange, onStepBackChange}) => {
  return (
    <>
    <main>
      <section className="head-section" id="two">
        <p>Question one</p>
        <h2>Hi {nameInput}, nice to meet you!</h2>
        <h2>Might be the most horrible question in the world but: Your top one song in the whole wide world?</h2>

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
            className="back-btn"
          >
            back
          </button>

          <button
            type="submit"
            onClick={onNextStepChange}
            className="next-btn"
            disabled= {musicInput === ""}
          >
            next
          </button>
        </div>
      </section>
    </main>
    </>
  );
};

export default QuestionTwo;
