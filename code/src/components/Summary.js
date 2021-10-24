import React from "react"

const Summary = ( {
  nameInput,
  purpose,
  goal,
  handleRestart
} ) => {
    return (
        <section className="summary">
        <h2>Survey summary</h2>
        <h3>What is your name, stranger?<sup> *</sup></h3>
        <p>Answer: {nameInput}</p>
        <h3>What brings you here?</h3>
        <p>Answer: {purpose}</p>
        <h3>What is your goal?</h3>
        <p>Answer: {goal}</p>
        <button className="btn" onClick={handleRestart}>Start over</button>
      </section>
    );
};

export default Summary