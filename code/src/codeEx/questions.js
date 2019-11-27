import React, { useState } from "react";


export const Question = () => {
  const [question, setQuestion] = useState('')
  return (
    <form>
      <h3>what is your name</h3>
      <input
        type="text"
        onChange={(event) => setQuestion(event.target.value)}
        value={question}
      />

    </form>

  );
}

