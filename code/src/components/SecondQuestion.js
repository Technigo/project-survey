import React from 'react';

const SecondQuestion = ({ genreChoice, onGenreChoiceSet, onStepChange, onStepGoBack, step }) => {
  return (
    <form className="formContainer">
      <label htmlFor="genre-select">
        <h1>Please pick which genre you prefer:</h1>
      </label>

      <select
        id="genre-select"
        className="genre-choice"
        value={genreChoice}
        onChange={onGenreChoiceSet}
      >
        <option disabled value="">
          Select your preffered genre
        </option>
        <option value="Heavy Metal">Heavy Metal</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
        <option value="Rap & RNB">Rap & RNB</option>
        <option value="Singer/Songwriter">Singer/Songwriter</option>
        <option value="Electronic dance music">Electronic dance music</option>
      </select>
      <div className="buttonContainer">
        <button className="button" onClick={onStepGoBack}>
          Previous question
        </button>
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </div>
    </form>
  );
};

export default SecondQuestion;
