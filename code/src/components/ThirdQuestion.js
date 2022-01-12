import React from "react";
import ImageComponent from "./ThirdImage";

const ThirdQuestion = ({ radioChecked, setRadioChecked }) => {
  return (
    <div className="container">
      <div className="contentWrapper">
        <p>Which one of these will you watch next?</p>
        <div className="radioForm">
          <form onSubmit={(event) => event.preventDefault()}>
            <label className="movie">
              <input
                type="radio"
                value="You chose Drive me crazy which is a 90's movie"
                onClick={(event) => setRadioChecked(event.target.value)}
                radioChecked={
                  radioChecked ===
                  "You chose Drive me crazy which is a 90's movie"
                }
              />
              Drive me crazy
            </label>
            <label className="movie">
              <input
                type="radio"
                value="You chose Can't buy me love which is an 80's movie"
                onChange={(event) => setRadioChecked(event.target.value)}
                radioChecked={
                  radioChecked ===
                  "You chose Can't buy me love which is an 80's movie"
                }
              />
              Can't buy me love
            </label>
            <label className="movie">
              <input
                type="radio"
                value="You chose Never been kissed which is a 90's movie"
                onChange={(event) => setRadioChecked(event.target.value)}
                radioChecked={
                  radioChecked ===
                  "You chose Never been kissed which is a 90's movie"
                }
              />
              Never been kissed
            </label>
            <label className="movie">
              <input
                type="radio"
                value="You chose Clueless which is a 90's movie"
                onChange={(event) => setRadioChecked(event.target.value)}
                radioChecked={
                  radioChecked === "You chose Clueless which is a 90's movie"
                }
              />
              Clueless
            </label>
            <label className="movie">
              <input
                type="radio"
                value="You chose She's all that which is a 90's movie"
                onChange={(event) => setRadioChecked(event.target.value)}
                radioChecked={
                  radioChecked ===
                  "You chose She's all that which is a 90's movie"
                }
              />
              She's all that
            </label>
            <label className="movie">
              <input
                type="radio"
                value="You chose 10 things I hate about you which is a 90's movie"
                onChange={(event) => setRadioChecked(event.target.value)}
                radioChecked={
                  radioChecked ===
                  "You chose 10 things I hate about you which is a 90's movie"
                }
              />
              10 things I hate about you
            </label>
            <label className="movie">
              <input
                type="radio"
                value="You chose Sixteen candles which is an 80's movie"
                onChange={(event) => setRadioChecked(event.target.value)}
                radioChecked={
                  radioChecked ===
                  "You chose Sixteen candles which is an 80's movie"
                }
              />
              Sixteen candles
            </label>
            <label className="movie">
              <input
                type="radio"
                value="You chose Dirty dancing which is an 80's movie"
                onChange={(event) => setRadioChecked(event.target.value)}
                radioChecked={
                  radioChecked ===
                  "You chose Dirty dancing which is an 80's movie"
                }
              />
              Dirty dancing
            </label>
            <label className="movie">
              <input
                type="radio"
                value="You chose Pretty in pink which is an 80's movie"
                onChange={(event) => setRadioChecked(event.target.value)}
                radioChecked={
                  radioChecked ===
                  "You chose Pretty in pink which is an 80's movie"
                }
              />
              Pretty in pink
            </label>
            <label className="movie">
              <input
                type="radio"
                value="You chose Flashdance which is an 80's movie"
                onChange={(event) => setRadioChecked(event.target.value)}
                radioChecked={
                  radioChecked === "You chose Flashdance which is an 80's movie"
                }
              />
              Flashdance
            </label>
          </form>
        </div>
        <ImageComponent />
      </div>
    </div>
  );
};

export default ThirdQuestion;
