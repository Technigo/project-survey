/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
import React from 'react';

const Suggestion = ({ suggestion, setSuggestion }) => {

  const handleSuggestionChange = (event) => {
    setSuggestion(event.target.value);
  }

  return (
    <div className="food-container">
      <p> Got any suggestions?</p>
      <label htmlFor="suggestion">
        <textarea
          className="textarea-opinion"
          name="suggestion"
          rows="10"
          cols="50"
          maxLength="300"
          placeholder="How can we improve our services? Let us know here..."
          value={suggestion}
          onChange={handleSuggestionChange}
          required />
      </label>
    </div>
  )
}

export default Suggestion;