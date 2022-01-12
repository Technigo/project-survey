import React from "react";
import ImageComponent from "components/SecondImage";

const SecondQuestion = ({ selectOption, setSelectOption }) => {
  return (
    <div className="container">
      <div className="contentWrapper">
        <div className="selectForm">
          <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="select">
              Which one of the following movies do you prefer?
            </label>
            <select
              value={selectOption}
              onChange={(event) => setSelectOption(event.target.value)}
            >
              <option value="Pretty in pink which is an 80's chickflick">
                Pretty in pink
              </option>
              <option value="Drive me crazy which is a 90's chickflick">
                Drive me crazy
              </option>
              <option value="Flashdance which is an 80's chickflick">
                Flashdance
              </option>
              <option value="10 things I hate about you which is a90's chickflick">
                10 things I hate about you
              </option>
              <option value="Dirty dancing which is an 80's chickflick">
                Dirty dancing
              </option>
              <option value="She's all that which is a 90's chickflick">
                She's all that
              </option>
            </select>
          </form>
        </div>
        <ImageComponent />
      </div>
    </div>
  );
};

export default SecondQuestion;
