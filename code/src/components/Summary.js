import React from "react";

const Summary = ({ nameInput, FavoriteInput, HolidayInput }) => {
  return (
    <section className="summary">
      <div class="overview">
        <h2>Thank you for taking the survey</h2>
        <h3>Name: {nameInput}</h3>
        <h3>My Favorite season: {FavoriteInput}</h3>
        <h3>My idea of a perfect holiday: I love {HolidayInput}</h3>
      </div>
    </section>
  );
};

export default Summary;
