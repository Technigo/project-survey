import React from "react";

const Summary = ({ nameInput, FavoriteInput, HolidayInput }) => {
  return (
    <section>
      <h2>Thank you for taking the survey</h2>
      <p>Name: {nameInput}</p>
      <p>My Favorite season: {FavoriteInput}</p>
      <p>My idea of a perfect holiday: I love {HolidayInput}</p>
    </section>
  );
};

export default Summary;
