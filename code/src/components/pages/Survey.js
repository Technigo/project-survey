import React, { useState } from "react";
import styled from "styled-components/macro";

import WhatsYourName from "../WhatsYourName";
import HowManyBooks from "../HowManyBooks";
import FavoriteBook from "../FavoriteBook";
import FavoriteFilm from "../FavoriteFilm";
import Summary from "../Summary";

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
      <SurveyWrapper className="form-container">
        {question !== "summary" && (
          <Form onSubmit={handleSubmit}>
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
                handleSubmit={handleSubmit}
              />
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
          </Form>
        )}
        {question === "summary" && (
          <Summary
            name={name}
            howManyBooks={howManyBooks}
            favoriteBook={favoriteBook}
            favoriteFilm={favoriteFilm}
          />
        )}
      </SurveyWrapper>
    </>
  );
};

export default Survey;

const SurveyWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto 20px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

const Form = styled.form`
  background-color: rgba(255, 250, 229, 0.7);
  border-radius: 20px;
  border: 2px solid #2F0E07;
  width: 90%;
  height: 80%;
`
