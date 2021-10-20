import React, { useState } from "react";

export const AnySuggestion = () => {
  const [feedbackInput, setFeedbackInput] = useState("");

  console.log("feedbackInput", feedbackInput);

  return (
    <form>
      <h1 className="questions-main-heading">Any suggestions on how we can improve?</h1>
      <input
        type="text"
        value={feedbackInput}
        name="inputFeedback"
        id="inputFeedback"
        onChange={(event) => setFeedbackInput(event.target.value)}
        placeholder="Leave your suggestion"
      />
    </form>
  );
};
