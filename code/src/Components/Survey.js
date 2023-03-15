import React, { useState } from 'react';
import { LandingPage } from 'Components/LandingPage';
import { TextQuestion } from 'Components/TextQuestion';
import { RadioQuestion } from 'Components/RadioQuestion';
import { SelectQuestion } from 'Components/SelectQuestion';
import { RangeSliderQuestion } from 'Components/RangeSliderQuestion';
import { Summary } from 'Components/Summary';

export const Survey = () => {
  const [questionStep, setQuestionStep] = useState(0);
  const [answers, setAnswers] = useState('');

  const printQuestions = () => {
    return (
      <>
        {questionStep === 0 && (
          <LandingPage
            landingTitle="Ready to find your dream home?"
            description="Click continue to get started!"
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Continue" />
        )}
        {questionStep === 1 && (
          <TextQuestion
            questionTitle="Please enter your name"
            label="First Name"
            questionId="firstName"
            onValueUpdate={(value) => {
              setAnswers({
                ...answers,
                firstName: value
              });
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Continue" />
        )}
        {questionStep === 2 && (
          <RadioQuestion
            label={['Villa', 'Apartment', 'Townhouse']}
            questionId="typeOfHome"
            onValueUpdate={(value) => {
              setAnswers({
                ...answers,
                typeOfHome: value
              });
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Continue" />
        )}
        {questionStep === 3 && (
          <SelectQuestion
            option={[1, 2, 3]}
            questionId="rooms"
            onValueUpdate={(value) => {
              setAnswers({
                ...answers,
                rooms: value
              });
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Continue" />
        )}
        {questionStep === 4 && (
          <RangeSliderQuestion
            label="SEK"
            questionId="firstName"
            onValueUpdate={(value) => {
              setAnswers({
                ...answers,
                price: value
              });
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Continue" />
        )}
        {questionStep === 5 && (
          <Summary
            answers={answers}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Search Homes" />
        )}
      </>
    );
  }
  return printQuestions();
};
