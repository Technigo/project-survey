import React from "react";

const Welcome = ({ changePage }) => {
  return (
    <section className="welcome page">
      <div className="overlay"></div>
      <h1>Workplace Flexibility Survey</h1>
      <button onClick={changePage}>Begin</button>
      <p>Takes about 1 min</p>
    </section>
  )
}

export default Welcome;