import React from "react";
import "./food.css";

const Food = ({
  foodInput,
  onFoodInputChange,
  onStepChange,
  onPreviousStepChange,
}) => {
  return (
    <div className="wrapper">
      <p className="food-header">Favorite type of food:</p>
      <form>
        <div className="food-wrapper">
          <span className="food-types">
            <label className="radiobutton-container">
              <div>
                <img
                  className="food-image"
                  src="./pictures/swedish.jpg"
                  alt="swedish meatball dish"
                />
              </div>
              <div className="radio-wrapper">
                <input
                  className="radio-button"
                  type="radio"
                  value="swedish"
                  onChange={onFoodInputChange}
                  checked={foodInput === "swedish"}
                />
                <span className="custom-radio"></span>
                <p className="food-title">Swedish food</p>
              </div>
            </label>
          </span>
          <div className="food-types">
            <label className="radiobutton-container">
              <div>
                <img
                  className="food-image"
                  src="./pictures/american.jpg"
                  alt="hamburger dish"
                />
              </div>
              <div className="radio-wrapper">
                <input
                  className="radio-button"
                  type="radio"
                  value="american"
                  onChange={onFoodInputChange}
                  checked={foodInput === "american"}
                />
                <span className="custom-radio"></span>
                <p className="food-title">American food</p>
              </div>
            </label>
          </div>
          <div className="food-types">
            <label className="radiobutton-container">
              {" "}
              <div>
                <img
                  className="food-image"
                  src="./pictures/italian.jpg"
                  alt="pasta dish"
                />
              </div>
              <div className="radio-wrapper">
                <input
                  className="radio-button"
                  type="radio"
                  value="italian"
                  onChange={onFoodInputChange}
                  checked={foodInput === "italian"}
                />
                <span className="custom-radio"></span>
                <p className="food-title">Italian food</p>
              </div>
            </label>
          </div>
          <div className="food-types">
            <label class="radiobutton-container">
              <div>
                <img
                  className="food-image"
                  src="./pictures/japanese.jpg"
                  alt="sushi dish"
                />
              </div>
              <div className="radio-wrapper">
                <input
                  className="radio-button"
                  type="radio"
                  value="japanese"
                  onChange={onFoodInputChange}
                  checked={foodInput === "japanese"}
                />
                <span className="custom-radio"></span>
                <p className="food-title">Japanese food</p>
              </div>
            </label>
          </div>
          <div className="food-types">
            <label className="radiobutton-container">
              <div>
                <img
                  className="food-image"
                  src="./pictures/mexican.jpg"
                  alt="tacos dish"
                />
              </div>
              <div className="radio-wrapper">
                <input
                  className="radio-button"
                  type="radio"
                  value="mexican"
                  onChange={onFoodInputChange}
                  checked={foodInput === "mexican"}
                />
                <span className="custom-radio"></span>
                <p className="food-title">Mexican food</p>
              </div>
            </label>
          </div>
          <div className="food-types">
            <label className="radiobutton-container">
              <div>
                <img
                  className="food-image"
                  src="./pictures/indian.jpg"
                  alt="indian dish"
                />
              </div>
              <div className="radio-wrapper">
                <input
                  className="radio-button"
                  type="radio"
                  value="indian"
                  onChange={onFoodInputChange}
                  checked={foodInput === "indian"}
                />
                <span className="custom-radio"></span>
                <p className="food-title">Indian food</p>
              </div>
            </label>
          </div>
        </div>
      </form>
      <div className="button-wrapper">
        <button onClick={onPreviousStepChange}>Previous question</button>
        <button onClick={onStepChange}>Next question</button>
      </div>
    </div>
  );
};

export default Food;
