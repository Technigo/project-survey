// second Question

import React from "react";

const Food = ({ food, onFoodChange, onStepChange }) => {
  return (
    <div className="container">
      <div className="secondQuestion">
        <form className="dietForm">
          <h1>
            Do you have any special dietary preferences?{" "}
            <span role="img" aria-label="sushi emoji">
              🍣
            </span>
          </h1>
          <p>
            I would like to know if you have any restrictions regarding food, so
            that I can make something really delicious!
          </p>
          <select id="food" onChange={onFoodChange} value={food}>
            <option disabled value="">
              {"Choose diet preference"}
            </option>
            <option value="">I eat anything</option>
            <option value="vegetarian">I'm a vegetarian</option>
            <option value="vegan">I'm a vegan</option>
            <option value="pescetarian">I'm a pescetarian</option>
            <option value="gluten">I'm allergic to gluten</option>
            <option value="lactose">I'm allergic to lactose</option>
            <option value="other">I have other dietary restrictions</option>
          </select>
          <button onClick={onStepChange}>Next</button>
        </form>
      </div>
    </div>
  );
};
export default Food;
