import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { LandingPage } from 'Components/LandingPage';
import { TextQuestion } from 'Components/TextQuestion';
import { RadioQuestion } from 'Components/RadioQuestion';
import { SelectQuestion } from 'Components/SelectQuestion';
import { RangeSliderQuestion } from 'Components/RangeSliderQuestion';
import { Summary } from 'Components/Summary';
import { Results } from 'Components/Results';

export const Survey = () => {
  const [questionStep, setQuestionStep] = useState(0);
  const [answers, setAnswers] = useState('');

  const printQuestions = () => {
    console.log(questionStep)
    return (
      <>
        {questionStep === 0 && (
          <LandingPage
            landingTitle="Ready to find your dream home?"
            description="Click to get started!"
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Start" />
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
            questionId="price"
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
            summaryTitle="Here are your requirements:"
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Show me homes"
            restartButtonLabel="Restart" />
        )}
        {questionStep === 6 && (
          <Results
            resultsTitle="Here are your results:"
            onNext={() => {
              setQuestionStep(1);
            }}
            restartButtonLabel="Search again" />
        )}
      </>
    );
  }
  const progressBar = () => {
    const percentage = (questionStep / 5) * 100
    return (
      <div className="progres-bar-container">
        <ProgressBar now={percentage} label={`${percentage}% completed`} />
      </div>
    );
  }
  return (
    <div>
      {printQuestions()}
      {progressBar()}
    </div>
  )
};