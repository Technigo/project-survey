/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';

const Favorite = ({ favorite, setFavorite, handleSubmitSurvey }) => {
  const handleFavoriteChange = (event) => {
    setFavorite(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmitSurvey();
  }

  // The select element is assigned an id of "favorite" to associate it with the label element.
  // The current value of favorite is set as the value of the select element, and the onChange event
  // handler updates the favorite state when the user selects a new option from the dropdown menu.
  // Each option is defined as an option element with its own value and display text.

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="favorite">Who is your favorite cartoon cat?</label>
        <select id="favorite" value={favorite} onChange={handleFavoriteChange}>
          <option disabled selected value="">Select your favorite</option>
          <option value="Chesire Cat">Chesire Cat</option>
          <option value="Garfield">Garfield</option>
          <option value="Hello Kitty">Hello Kitty</option>
          <option value="Hobbes">Hobbes</option>
          <option value="Puss in Boots">Puss in Boots</option>
          <option value="Snowball">Snowball</option>
          <option value="Tom">Tom</option>
          <option value="Tony the Tiger">Tony the Tiger</option>
        </select>
      </form>
    </div>
  );
}

export default Favorite;