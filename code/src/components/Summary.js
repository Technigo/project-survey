import React from "react";

import {
  SummaryContainer,
  Title,
  TextWrapper,
  TextQuestion,
  TextAnswer,
  ButtonContainer,
  Button,
  Span,
} from "./styled-components/FormElements";

const Summary = ({ name, howManyBooks, favoriteBook, favoriteFilm }) => {
  const backToStart = () => {
    document.location.reload();
  };
  return (
    <>
      <SummaryContainer>
        <Title
          tabIndex="0"
          className="summary-title"
          aria-label="Summary of survey"
        >
          Summary of Survey
        </Title>
        <TextWrapper>
          <TextQuestion
            tabIndex="0"
            aria-label="Hello let's take another look at your answers!"
          >
            Hello <Span>{name}!</Span>
            <br />
            <br />
            Let's take another look at your answers!
          </TextQuestion>
        </TextWrapper>
        <TextWrapper>
          <TextQuestion
            tabIndex="0"
            aria-label="How many of Jane Austen's books have you read?"
          >
            How many of Jane Austen's books have you read?
          </TextQuestion>
          <TextAnswer tabIndex="0" aria-label="Answer">
            Answer: {howManyBooks}
          </TextAnswer>
        </TextWrapper>
        <TextWrapper>
          <TextQuestion
            tabIndex="0"
            aria-label="Which was your favorite of her novels?"
          >
            Which was your favorite of her novels?
          </TextQuestion>
          <TextAnswer tabIndex="0" aria-label="Answer">
            Answer: {favoriteBook}
          </TextAnswer>
        </TextWrapper>
        <TextWrapper>
          <TextQuestion
            tabIndex="0"
            aria-label="What was your favorite film/tv adaptation of Pride and Prejudice?"
          >
            What was your favorite film/tv adaptation of Pride and Prejudice?
          </TextQuestion>
          <TextAnswer tabIndex="0" aria-label="Answer">
            Answer: {favoriteFilm}
          </TextAnswer>
        </TextWrapper>
        <ButtonContainer>
          <Button
            type="button"
            tabIndex="0"
            aria-pressed="false"
            aria-label="Back to homepage"
            onClick={backToStart}
          >
            Back to homepage
          </Button>
        </ButtonContainer>
      </SummaryContainer>
    </>
  );
};

export default Summary;
