import React from 'react';


const Food = ({name, food, setFood, handleStepIncrease, handleStepDecrease}) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }
  return (
    <section className="container">
      <div className="input-card">
        <p>What is your favourite food?</p>

      <label>
        Age Group:
          <input
          type = "radio"
          value="small"
          onChange = {handleFoodChange}
          checked= {food === "small"}
          >

          </input>
          small
          <input
          type = "radio"
          value="medium"
          onChange = {handleFoodChange}
          checked= {food === "medium"}
          >

          </input>
          medium
          <input
          type = "radio"
          value="large"
          onChange = {handleFoodChange}
          checked= {food === "large"}
          >

          </input>
          large
       </label>
      </div>
      <div className="button-card">
        <button type="button" onClick={handleStepDecrease}>Previous</button>
        <button type="button" onClick={handleStepIncrease}>Next question</button>
       
        </div>
    </section>
  );
}
export default Food

