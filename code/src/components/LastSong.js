import React from "react";

const LastSong = ({ songInput, handleSongInputChange, onStepChange }) => {
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
          <button onClick={onStepChange}>Next Question</button>
        </form>
      </section>
    </>
  );
};

export default LastSong;
