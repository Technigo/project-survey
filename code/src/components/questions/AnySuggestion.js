import React from "react";

export const AnySuggestion = ({ suggestionInput, onSuggestionInputChange }) => {
  return (
    <form>
      <h1 className="questions-main-heading">Any suggestions on how we can improve?</h1>
      <input
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
