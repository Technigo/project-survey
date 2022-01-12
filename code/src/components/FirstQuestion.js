import React from "react";
import ImageComponent from "./FirstImage";

const FirstQuestion = ({ radioChecked, setRadioChecked }) => {
  return (
    <div className="container">
      <div className="contentWrapper">
        <p>Which character do you mostly identify with?</p>
        <div className="radioForm">
          <form onSubmit={(event) => event.preventDefault()}>
            <label className="movie">
              <input
                type="radio"
                value="Cher"
                onChange={(event) => setRadioChecked(event.target.value)}
                checked={radioChecked === "Cher"}
              />
              Cher From Clueless, wealthy girl takes poor girl under her wing
              and transforms her into a popular girl as well as transforming
              herself spiritually.
            </label>
            <label className="movie">
              <input
                type="radio"
                value="Samantha"
                onChange={(event) => setRadioChecked(event.target.value)}
                checked={radioChecked === "Samantha"}
              />
              Samantha from Sixteen Candles, her birthday is forgotten by her
              family, and she suffers from every embarrassment possible.
            </label>
          </form>
        </div>
        <ImageComponent />
      </div>
    </div>
  );
};

export default FirstQuestion;
