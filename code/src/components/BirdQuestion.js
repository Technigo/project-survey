import React from "react";

const BirdQuestion = ({
  birdInput,
  handleBirdInputChange,
  onStepChange,
  onPreviousQuestionChange,
}) => {
  return (
    <form className="form-container" tabIndex="0">
      <label className="label-text">
        Least favorite bird
        <span role="img" aria-label="bird emoji">
          🐦
        </span>
      </label>
      <select value={birdInput} onChange={handleBirdInputChange}>
        <option className="select-default" value="pick bird">
          PICK BIRD HERE
        </option>
        <option value="seagull">seagulls</option>
        <option value="magpie">magpies</option>
        <option value="swan">swans</option>
        <option value="canada goose">canada geese</option>
        <option value="crow">crows</option>
        <option value="parrots">parrots</option>
      </select>
      <div>
        <button onClick={onPreviousQuestionChange}>Prev question</button>
        <button type="submit" onClick={onStepChange}>
          Next question
        </button>
      </div>
    </form>
  );
};
export default BirdQuestion;
