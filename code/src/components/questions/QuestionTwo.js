import React, { useState } from "react";

export const QuestionTwo = () => {
  const [selectedOption, setState] = useState("5");

  console.log("selectedOption", selectedOption);

  const handleOptionChange = (changeEvent) => {
    setState(changeEvent.target.value);
  };

  return (
    <form>
      <h1>Design</h1>
      <input type="radio" value="1" name="one" id="one" checked={selectedOption === "1"} onChange={handleOptionChange} />
      <label htmlFor="one">1</label>
      <input type="radio" value="2" name="two" id="two" checked={selectedOption === "2"} onChange={handleOptionChange} />
      <label htmlFor="two">2</label>
      <input type="radio" value="3" name="three" id="three" checked={selectedOption === "3"} onChange={handleOptionChange} />
      <label htmlFor="three">3</label>
      <input type="radio" value="4" name="four" id="four" checked={selectedOption === "4"} onChange={handleOptionChange} />
      <label htmlFor="four">4</label>
      <input type="radio" value="5" name="five" id="five" checked={selectedOption === "5"} onChange={handleOptionChange} />
      <label htmlFor="five">5</label>
    </form>
  );
};
