import React from "react";

export const QuestionTwo = ({ design, onDesignRatioChange }) => {
  const handleOptionChange = (changeEvent) => {
    onDesignRatioChange(changeEvent.target.value);
  };

  return (
    <form>
      <h1 className="questions-main-heading">Design</h1>
      <input type="radio" value="1" name="one" id="one" checked={design === "1"} onChange={handleOptionChange} />
      <label htmlFor="one">1</label>
      <input type="radio" value="2" name="two" id="two" checked={design === "2"} onChange={handleOptionChange} />
      <label htmlFor="two">2</label>
      <input type="radio" value="3" name="three" id="three" checked={design === "3"} onChange={handleOptionChange} />
      <label htmlFor="three">3</label>
      <input type="radio" value="4" name="four" id="four" checked={design === "4"} onChange={handleOptionChange} />
      <label htmlFor="four">4</label>
      <input type="radio" value="5" name="five" id="five" checked={design === "5"} onChange={handleOptionChange} />
      <label htmlFor="five">5</label>
    </form>
  );
};
