import React from "react";

const Overview = ({ nameInput, restaurantInput, cityInput, foodInput }) => {
  return (
    <>
      <section>
        <h2>Thanks for answering the survey</h2>
        <p>Name: {nameInput}</p>
        <p> City: {cityInput}</p>
        <p> Favorite type of food: {foodInput}</p>
        <p>Favorite Restaurant: {restaurantInput}</p>
      </section>
      {/* <section>
        <h3>
          Would you like to subscribe to our newsletter and keep updated on new
          restaurants in your city?
        </h3>
      </section> */}
    </>
  );
};

export default Overview;
