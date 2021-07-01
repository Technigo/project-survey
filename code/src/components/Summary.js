import React from "react";

const Summary = ({ name, howManyBooks, favoriteBook, favoriteFilm }) => {
  const backToStart = () => {
    document.location.reload();
  };
  return (
    <>
      <section>
        <h2 className="summary-title">Summary</h2>
        <div>
          <p>Hello {name}! Let's take another look at your answers!</p>
        </div>
        <div>
          <p>How many of Jane Austen's books have you read?</p>
          <p>Answer: {howManyBooks}</p>
        </div>
        <div>
          <p>Which was your favorite of her novels?</p>
          <p>Answer: {favoriteBook}</p>
        </div>
        <div>
          <p>
            What was your favorite film/tv adaptation of Pride and Prejudice?
          </p>
          <p>Answer: {favoriteFilm}</p>
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
  );
};
