import React from "react";

export const QuestionNine = ({ rating, onRatingChange }) => {
  const handleOptionChange = (changeEvent) => {
    onRatingChange(changeEvent.target.value);
  };

  return (
    <form className="radio-container extra-space">
      <div>
        <h1 className="questions-main-heading">Would you recommend our product?</h1>
        <p className="instructions">
          <span role="img" aria-label="tick" className="general-tick-color tick-img">
            ☑️
          </span>
          &nbsp;
          <span role="text" aria-label="instruction">
            1 - "Very Unlikely"
          </span>
          <br />
          <span role="img" aria-label="tick" className="highlight tick-img">
            ☑️
          </span>
          &nbsp;
          <span role="text" aria-label="instruction">
            10 - "100% will recommend!"
          </span>
        </p>
      </div>
      <div class="buttons-wrapper">
        <label className="label" htmlFor="one">
          <input className="radio-input" type="radio" value="1" name="one" id="one" checked={rating === "1"} onChange={handleOptionChange} />
          <span>1</span>
        </label>
        <label className="label" htmlFor="two">
          <input className="radio-input" type="radio" value="2" name="two" id="two" checked={rating === "2"} onChange={handleOptionChange} />
          <span>2</span>
        </label>
        <label className="label" htmlFor="three">
          <input className="radio-input" type="radio" value="3" name="three" id="three" checked={rating === "3"} onChange={handleOptionChange} />
          <span>3</span>
        </label>
        <label className="label" htmlFor="four">
          <input className="radio-input" type="radio" value="4" name="four" id="four" checked={rating === "4"} onChange={handleOptionChange} />
          <span>4</span>
        </label>
        <label className="label" htmlFor="five">
          <input className="radio-input" type="radio" value="5" name="five" id="five" checked={rating === "5"} onChange={handleOptionChange} />
          <span>5</span>
        </label>
        <label className="label" htmlFor="one">
          <input className="radio-input" type="radio" value="6" name="six" id="six" checked={rating === "6"} onChange={handleOptionChange} />
          <span>6</span>
        </label>
        <label className="label" htmlFor="two">
          <input className="radio-input" type="radio" value="7" name="seven" id="seven" checked={rating === "7"} onChange={handleOptionChange} />
          <span>7</span>
        </label>
        <label className="label" htmlFor="three">
          <input className="radio-input" type="radio" value="8" name="eight" id="eight" checked={rating === "8"} onChange={handleOptionChange} />
          <span>8</span>
        </label>
        <label className="label" htmlFor="four">
          <input className="radio-input" type="radio" value="9" name="nine" id="nine" checked={rating === "9"} onChange={handleOptionChange} />
          <span>9</span>
        </label>
        <label className="label" htmlFor="five">
          <input className="radio-input" type="radio" value="10" name="ten" id="ten" checked={rating === "10"} onChange={handleOptionChange} />
          <span>10</span>
        </label>
      </div>
    </form>
  );
};
