import React, { useState } from "react";
import Intro from "./Intro";
import Name from "./Name";
import City from "./City";
import Food from "./Food";
import Restaurant from "./Restaurant";
import Overview from "./Overview";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  console.log("name input", nameInput);
  const [cityInput, setCityInput] = useState("");
  console.log("city", cityInput);
  const [foodInput, setFoodInput] = useState("");
  console.log("food", foodInput);
  const [restaurantInput, setRestaurantInput] = useState("");
  console.log("restaurant", restaurantInput);

  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onCityInputChange = (event) => {
    setCityInput(event.target.value);
  };

  const onFoodInputChange = (foodInput) => {
    setFoodInput(foodInput);
  };

  const onRestaurantInputChange = (event) => {
    setRestaurantInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && <Intro onStepChange={onStepChange} />}
      {step === 2 && (
        <Name
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <City
          city={cityInput}
          onCityInputChange={onCityInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Food
          food={foodInput}
          onFoodInputChange={onFoodInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <Restaurant
          restaurant={restaurantInput}
          onRestaurantInputChange={onRestaurantInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 6 && (
        <Overview nameInput={nameInput} restaurantInput={restaurantInput} />
      )}
    </div>
  );
};

export default Form;
