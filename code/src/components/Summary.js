import React from "react";

const Summary = ({ name, howManyBooks, favoriteBook, favoriteFilm }) => {
  const backToStart = () => {
    document.location.reload();
  };
  return (
    <>
      <section>
        <h2
          tabIndex="0"
          className="summary-title"
          aria-label="Summary of survey"
        >
          Summary of Survey
        </h2>
        <div>
          <p
            tabIndex="0"
            aria-label="Hello let's take another look at your answers!"
          >
            Hello {name}! Let's take another look at your answers!
          </p>
        </div>
        <div>
          <p
            tabIndex="0"
            aria-label="How many of Jane Austen's books have you read?"
          >
            How many of Jane Austen's books have you read?
          </p>
          <p tabIndex="0" aria-label="Answer">
            Answer: {howManyBooks}
          </p>
        </div>
        <div>
          <p tabIndex="0" aria-label="Which was your favorite of her novels?">
            Which was your favorite of her novels?
          </p>
          <p tabIndex="0" aria-label="Answer">
            Answer: {favoriteBook}
          </p>
        </div>
        <div>
          <p
            tabIndex="0"
            aria-label="What was your favorite film/tv adaptation of Pride and Prejudice?"
          >
            What was your favorite film/tv adaptation of Pride and Prejudice?
          </p>
          <p tabIndex="0" aria-label="Answer">
            Answer: {favoriteFilm}
          </p>
        </div>
        <button
          type="button"
          tabIndex="0"
          aria-pressed="false"
          aria-label="Back to homepage"
          onClick={backToStart}
        >
          Back to homepage
        </button>
      </section>
    </>
  )
};

export default Summary;
