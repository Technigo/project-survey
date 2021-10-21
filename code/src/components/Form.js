import React, { useState } from "react";
import Intro from "./Intro";
import Name from "./Name";
import City from "./City";
import Food from "./Food";
import Restaurant from "./Restaurant";
import Price from "./Price";
import Overview from "./Overview";
import Subscription from "./Subscription";

const Form = () => {
  const [nameInput, setNameInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [foodInput, setFoodInput] = useState("");
  const [restaurantInput, setRestaurantInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [subscriptionInput, setSubscriptionInput] = useState("");
  const [step, setStep] = useState(1);

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onCityInputChange = (event) => {
    setCityInput(event.target.value);
  };

  const onFoodInputChange = (event) => {
    setFoodInput(event.target.value);
  };

  const onRestaurantInputChange = (event) => {
    setRestaurantInput(event.target.value);
  };

  const onPriceInputChange = (event) => {
    setPriceInput(event.target.value);
  };

  const onSubscriptionInputChange = (event) => {
    setSubscriptionInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  const onPreviousStepChange = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && <Intro onStepChange={onStepChange} />}
      {step === 2 && (
        <Name
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onPreviousStepChange={onPreviousStepChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <City
          city={cityInput}
          onCityInputChange={onCityInputChange}
          onPreviousStepChange={onPreviousStepChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <Food
          food={foodInput}
          onFoodInputChange={onFoodInputChange}
          onPreviousStepChange={onPreviousStepChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <Restaurant
          restaurant={restaurantInput}
          onRestaurantInputChange={onRestaurantInputChange}
          onPreviousStepChange={onPreviousStepChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 6 && (
        <Price
          price={priceInput}
          onPriceInputChange={onPriceInputChange}
          onPreviousStepChange={onPreviousStepChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 7 && (
        <Subscription
          subscriptionInput={subscriptionInput}
          onSubscriptionInputChange={onSubscriptionInputChange}
          onPreviousStepChange={onPreviousStepChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 8 && (
        <Overview
          nameInput={nameInput}
          cityInput={cityInput}
          foodInput={foodInput}
          restaurantInput={restaurantInput}
          priceInput={priceInput}
          subscriptionInput={subscriptionInput}
        />
      )}
    </div>
  );
};

export default Form;
