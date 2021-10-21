import React from "react";

const Overview = ({
  nameInput,
  restaurantInput,
  cityInput,
  foodInput,
  priceInput,
  subscriptionInput,
}) => {
  return (
    <div className="wrapper">
      <div className="overview-wrapper">
        <h2>Thanks for answering the survey</h2>
        <p>Name: {nameInput}</p>
        <p>E-mail: {subscriptionInput}</p>
        <p> City: {cityInput}</p>
        <p> Favorite type of food: {foodInput} food</p>
        <p>Favorite Restaurant: {restaurantInput}</p>
        <p>Usual cost per plate: {priceInput}</p>
      </div>
      <form>
        <div className="button-wrapper">
          <button type="submit">Restart survey</button>
        </div>
      </form>
    </div>
  );
};

export default Overview;
