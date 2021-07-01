import React, { useState } from "react";

import WhatsYourName from "../WhatsYourName";
import HowManyBooks from "../HowManyBooks";
import FavoriteBook from "../FavoriteBook";
import FavoriteFilm from "../FavoriteFilm";
import Summary from "../Summary"

const Survey = () => {
  const [name, setName] = useState("");
  const [howManyBooks, setHowManyBooks] = useState();
  const [favoriteBook, setFavoriteBook] = useState("");
  const [favoriteFilm, setFavoriteFilm] = useState("");
  const [question, setQuestion] = useState("welcome");

  const questionOrder = [
    "welcome",
    "question1",
    "question2",
    "question3",
    "summary",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextQuestionIndex = questionOrder.indexOf(question);
    setQuestion(questionOrder[nextQuestionIndex + 1]);
  };

  return (
    <>
      <section className="form-container">
        {question !== "summary" && (
          <form onSubmit={handleSubmit}>
            {question === "welcome" && (
              <WhatsYourName
                name={name}
                setName={setName}
                handleSubmit={handleSubmit}
              />
            )}
            {question === "question1" && (
              <HowManyBooks 
                howManyBooks={howManyBooks}
                setHowManyBooks={setHowManyBooks}
                handleSubmit={handleSubmit} />
            )}
            {question === "question2" && (
              <FavoriteBook
                favoriteBook={favoriteBook}
                setFavoriteBook={setFavoriteBook}
                handleSubmit={handleSubmit}
              />
            )}
            {question === "question3" && (
              <FavoriteFilm
                favoriteFilm={favoriteFilm}
                setFavoriteFilm={setFavoriteFilm}
                handleSubmit={handleSubmit}
              />
            )}
          </form>
        )}
        {question === "summary" && (
          <Summary
            name={name}
            howManyBooks={howManyBooks}
            favoriteBook={favoriteBook}
            favoriteFilm={favoriteFilm}
          />
        )}
      </section>
    </>
  )
};

export default Survey;
