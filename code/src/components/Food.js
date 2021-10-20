import React from "react";

const Food = ({ foodInput, onFoodInputChange, onStepChange }) => {
  return (
    <form>
      Favorite type of food:
      <div className="food-wrapper">
        <div className="food-types">
          <label>
            <div>
              <img
                className="food-image"
                src="./pictures/swedish.jpg"
                alt="swedish meatball dish"
              />{" "}
            </div>
            <div>
              <input
                type="radio"
                value="swedish"
                onChange={() => onFoodInputChange("Swedish food")}
                checked={foodInput === "Swedish food"}
              />
              Swedish food{" "}
            </div>
          </label>
        </div>
        <div className="food-types">
          <label>
            <div>
              <img
                className="food-image"
                src="./pictures/american.jpg"
                alt="hamburger dish"
              />{" "}
            </div>
            <div>
              <input
                type="radio"
                value="american"
                onChange={() => onFoodInputChange("American food")}
                checked={foodInput === "American food"}
              />
              American food{" "}
            </div>
          </label>
        </div>
        <div className="food-types">
          <label>
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
                type="radio"
                value="italian"
                onChange={() => onFoodInputChange("Italian food")}
                checked={foodInput === "Italian food"}
              />
              Italian food{" "}
            </div>
          </label>
        </div>
        <div className="food-types">
          <label>
            <div>
              <img
                className="food-image"
                src="./pictures/japanese.jpg"
                alt="sushi dish"
              />{" "}
            </div>
            <div>
              <input
                type="radio"
                value="japanese"
                onChange={() => onFoodInputChange("Japanese food")}
                checked={foodInput === "Japanese food"}
              />
              Japanese food{" "}
            </div>
          </label>
        </div>
        <div className="food-types">
          <label>
            <div>
              <img
                className="food-image"
                src="./pictures/mexican.jpg"
                alt="tacos dish"
              />
            </div>
            <div>
              <input
                type="radio"
                value="mexican"
                onChange={() => onFoodInputChange("Mexican food")}
                checked={foodInput === "Mexican food"}
              />
              Mexican food{" "}
            </div>
          </label>
        </div>
        <div className="food-types">
          <label>
            <div>
              <img
                className="food-image"
                src="./pictures/swedish.jpg"
                alt="indian dish"
              />
            </div>
            <div>
              <input
                type="radio"
                value="indian"
                onChange={() => onFoodInputChange("Indian food")}
                checked={foodInput === "Indian food"}
              />
              Indian food
            </div>
          </label>
        </div>
      </div>
      <button onClick={onStepChange}>Next questions</button>
    </form>
  );
};

export default Food;
