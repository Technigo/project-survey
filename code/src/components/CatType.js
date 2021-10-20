// second Question

import React from "react";

const CatType = ({ food, onFoodChange, onStepChange }) => {
  return (
    <div className="container">
      <div className="secondQuestion">
        <form>
          <h1 className="secondH1">
            Do you have any special dietary preferences? 🍣
          </h1>
          <p>
            I would like to know if you have any restrictions regarding food, so
            i can make something really delicious!
          </p>
          <div className="diet">
            <select id="food" onChange={onFoodChange} value={food}>
              <option disabled value="">
                {"Choose diet preference"}
              </option>
              <option value="">I eat anyting</option>
              <option value="vegetarian">I'm a Vegetarian</option>
              <option value="vegan">I'm a Vegan</option>
              <option value="peskiterian">I'm a Peskiterian</option>
              <option value="gluten">I'm alergic to gluten</option>
              <option value="lactos">I'm alergic to lactos</option>
              <option value="other">I have other dietary restrictions</option>
            </select>
            <button onClick={onStepChange}>Next Question</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CatType;
