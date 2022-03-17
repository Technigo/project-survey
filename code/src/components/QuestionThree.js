import React from "react";

const QuestionThree = (props) => {
  const { location, locations, onThirdInputChange } = props;
  return (
    <div>
      <h1>Choose your city to attend your local gardening group? </h1>
      <form>
        <label
          htmlFor="locationOptions"
          aria-label="choose your local gardening group"
        >
          <select onChange={onThirdInputChange} value={location}>
            <option value="">My city is</option>
            <option value={locations}>Stockholm</option>
            <option value={locations}>Göteborg</option>
            <option value={locations}>Malmö</option>
            <option value={locations}>Skåne</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default QuestionThree;
