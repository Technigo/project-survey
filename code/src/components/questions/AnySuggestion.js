import React from "react";

export const AnySuggestion = ({ suggestionInput, onSuggestionInputChange }) => {
  return (
    <form className="select-container">
      <h1 className="questions-main-heading">How we can improve?</h1>
      <input
        className="custom-input"
        type="text"
        value={suggestionInput}
        name="suggestionInput"
        id="suggestionInput"
        onChange={(event) => onSuggestionInputChange(event.target.value)}
        placeholder="Leave your suggestion"
      />
    </form>
  );
};
