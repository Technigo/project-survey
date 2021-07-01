import React, { useState } from "react";

import WhatsYourName from "components/WhatsYourName";
import HowManyBooks from "components/HowManyBooks";
import FavoriteBook from "components/FavoriteBook";
import FavoriteFilm from "components/FavoriteFilm";

const Survey = () => {
  const [name, setName] = useState('');
  const [howManyBooks, setHowManyBooks] = useState();
  const [favoriteBook, setFavoriteBook] = useState();
  const [favoriteFilm, setFavoriteFilm] = useState();
  const [question, setQuestion] = useState("welcome");

  const questionOrder = [
    "welcome",
    "question1",
    "question2",
    "question3",
    "summary",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    nextQuestionIndex = questionOrder.indexOf(question);
    setQuestion(questionOrder[nextQuestionIndex + 1]);
  };

  return (
    <>
      <section className="form-container">
        {section !== "summary" && (
          <form onSubmit={handleSubmit}>
            {section === "welcome" && (
              <WhatsYourName
                name={name}
                setName={setName}
                handleSubmit={handleSubmit}
              />
            )}
            {section === "question1" && (
              <HowManyBooks 
                howManyBooks={howManyBooks}
                setHowManyBooks={setHowManyBooks}
                handleSubmit={handleSubmit} />
            )}
            {section === "question2" && (
              <FavoriteBook
                favoriteBook={favoriteBook}
                setFavoriteBook={setFavoriteBook}
                handleSubmit={handleSubmit}
              />
            )}
            {section === "question3" && (
              <FavoriteFilm
                favoriteFilm={favoriteFilm}
                setFavoriteFilm={setFavoriteFilm}
                handleSubmit={handleSubmit}
              />
            )}
          </form>
        )}
        ;
        {section === "summary" && (
          <Summary
            name={name}
            howManyBooks={howManyBooks}
            favoriteBook={favoriteBook}
            favoriteFilm={favoriteFilm}
          />
        )}
      </section>
    </>
  );
};

export default Survey;
