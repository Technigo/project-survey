import React from "react";

const LastSong = ({
  songInput,
  handleSongInputChange,
  onStepChange,
  onPreviousQuestionChange,
}) => {
  return (
    <>
      <section className="form-container" tabIndex="0">
        <form>
          <label className="label-text" htmlFor="punInput">
            Last song you listened to?
          </label>
          <input
            className="input-field"
            required
            id="songInput"
            type="text"
            placeholder="enter song here"
            name="song"
            value={songInput}
            onChange={handleSongInputChange}
          />
          <div button-container>
            <button onClick={onPreviousQuestionChange}>Prev question</button>
            <button
              onSubmit={e => e.preventDefault()}
              type="submit"
              name="song-question"
              onClick={onStepChange}
            >
              Next Question
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LastSong;
