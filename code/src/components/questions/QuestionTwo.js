import React from "react";

export const QuestionTwo = ({ design, onDesignRatioChange }) => {
  const handleOptionChange = (changeEvent) => {
    onDesignRatioChange(changeEvent.target.value);
  };

  return (
    <form className="radio-container">
      <h1 className="questions-main-heading">Design</h1>
      <div class="buttons-wrapper">
        <label className="label" htmlFor="one">
          <input className="radio-input" type="radio" value="1" name="one" id="one" checked={design === "1"} onChange={handleOptionChange} />

          <span>1</span>
        </label>
        <label className="label" htmlFor="two">
          <input className="radio-input" type="radio" value="2" name="two" id="two" checked={design === "2"} onChange={handleOptionChange} />

          <span>2</span>
        </label>
        <label className="label" htmlFor="three">
          <input className="radio-input" type="radio" value="3" name="three" id="three" checked={design === "3"} onChange={handleOptionChange} />

          <span>3</span>
        </label>
        <label className="label" htmlFor="four">
          <input className="radio-input" type="radio" value="4" name="four" id="four" checked={design === "4"} onChange={handleOptionChange} />

          <span>4</span>
        </label>
        <label className="label" htmlFor="five">
          <input className="radio-input" type="radio" defaultValue="5" name="five" id="five" checked={design === "5"} onChange={handleOptionChange} />

          <span>5</span>
        </label>
      </div>
    </form>
  );
};
