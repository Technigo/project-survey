import React from "react";

const IntroPage = ({ nextQuestion }) => {
  return (
    <main className="main-container start">
      <h1>Welcome to this travel survey!</h1>
      <form className="form-container">
        <h2>
          This is a survey about your favorite destination and what you prefer
          to go on vacation
        </h2>
        <button className="next-btn" onClick={nextQuestion}>
          Start the survey!
        </button>
      </form>
    </main>
  );
};

export default IntroPage;
