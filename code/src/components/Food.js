import React from "react";
import foodCss from "./food.css";

const Food = ({
  foodInput,
  onFoodInputChange,
  onStepChange,
  onPreviousStepChange,
}) => {
  return (
    <div className="wrapper">
      <form>
        <p className="food-header">Favorite type of food:</p>
        <div className="food-wrapper">
          <div className="food-types">
            <label class="radiobutton-container">
              <div>
                <img
                  className="food-image"
                  src="./pictures/swedish.jpg"
                  alt="swedish meatball dish"
                />{" "}
              </div>
              <div>
                <input
                  className="radio-button"
                  type="radio"
                  value="swedish"
                  onChange={() => onFoodInputChange("swedish")}
                  checked={foodInput === "swedish"}
                />
                Swedish food
              </div>
            </label>
          </div>
          <div className="food-types">
            <label class="radiobutton-container">
              <div>
                <img
                  className="food-image"
                  src="./pictures/american.jpg"
                  alt="hamburger dish"
                />
              </div>
              <div>
                <input
                  className="radio-button"
                  type="radio"
                  value="american"
                  onChange={() => onFoodInputChange("american")}
                  checked={foodInput === "american"}
                />
                American food
              </div>
            </label>
          </div>
          <div className="food-types">
            <label class="radiobutton-container">
              {" "}
              <div>
                <img
                  className="food-image"
                  src="./pictures/italian.jpg"
                  alt="pasta dish"
                />
              </div>
              <div>
                <input
                  className="radio-button"
                  type="radio"
                  value="italian"
                  onChange={() => onFoodInputChange("italian")}
                  checked={foodInput === "italian"}
                />
                Italian food
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
                />{" "}
              </div>
              <div>
                <input
                  className="radio-button"
                  type="radio"
                  value="japanese"
                  onChange={() => onFoodInputChange("japanese")}
                  checked={foodInput === "japanese"}
                />
                Japanese food
              </div>
            </label>
          </div>
          <div className="food-types">
            <label class="radiobutton-container">
              <div>
                <img
                  className="food-image"
                  src="./pictures/mexican.jpg"
                  alt="tacos dish"
                />
              </div>
              <div>
                <input
                  className="radio-button"
                  type="radio"
                  value="mexican"
                  onChange={() => onFoodInputChange("mexican")}
                  checked={foodInput === "mexican"}
                />
                Mexican food
              </div>
            </label>
          </div>
          <div className="food-types">
            <label class="radiobutton-container">
              <div>
                <img
                  className="food-image"
                  src="./pictures/indian.jpg"
                  alt="indian dish"
                />
              </div>
              <div>
                <input
                  className="radio-button"
                  type="radio"
                  value="indian"
                  onChange={() => onFoodInputChange("indian")}
                  checked={foodInput === "indian"}
                />
                Indian food
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
