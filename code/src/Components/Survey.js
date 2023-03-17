/* eslint-disable*/
import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LandingPage } from 'Components/LandingPage';
import { TextQuestion } from 'Components/TextQuestion';
import { RadioQuestion } from 'Components/RadioQuestion';
import { CheckboxQuestion } from 'Components/CheckboxQuestion';
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
            description="Let's get started!"
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            buttonLabel="Start" />
        )}
        {questionStep === 1 && (
          <TextQuestion
            questionTitle="First things first, what shall we call you?"
            label="Name"
            questionId="firstName"
            onValueUpdate={(value) => {
              setAnswers({
                ...answers,
                firstName: value
              });
            }}
            answers={answers}
            onPrevious={() => {
              setQuestionStep(questionStep - 1);
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            previousButtonLabel="Back"
            buttonLabel="Continue"/>
        )}
        {questionStep === 2 && (
          <RadioQuestion
            questionGreeting={`Hello ${answers.firstName},`}
            questionTitle="What type of property are you looking for?"
            labels={['Villa', 'Apartment', 'Townhouse']}
            questionId="typeOfHome"
            onValueUpdate={(value) => {
              setAnswers({
                ...answers,
                typeOfHome: value
              });
            }}
            onPrevious={() => {
              setQuestionStep(questionStep - 1);
            }}
            onNext={() => {
              (answers.typeOfHome === 'Apartment'
                ? setQuestionStep(questionStep + 1) : setQuestionStep(questionStep + 2))
            }}
            previousButtonLabel="Back"
            buttonLabel="Continue" />
        )}
        {questionStep === 3 && (
          <CheckboxQuestion
            questionTitle="Would you like a reserved parking spot near your apartment?"
            label="Yes"
            questionId="parking"
            onValueUpdate={(value) => {
              setAnswers({
                ...answers,
                parking: value
              });
            }}
            onPrevious={() => {
              setQuestionStep(questionStep - 1);
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            previousButtonLabel="Back"
            buttonLabel="Continue" />
        )}
        {questionStep === 4 && (
          <SelectQuestion
            questionTitle="How many rooms would you like?"
            option={[1, 2, 3]}
            questionId="rooms"
            onValueUpdate={(value) => {
              setAnswers({
                ...answers,
                rooms: value
              });
            }}
            onPrevious={() => {
              (answers.typeOfHome === 'Apartment'
              ? setQuestionStep(questionStep - 1) : setQuestionStep(questionStep - 2))
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            previousButtonLabel="Back"
            buttonLabel="Continue" />
        )}
        {questionStep === 5 && (
          <RangeSliderQuestion
            questionTitle="What's the most you would spend on your new home?"
            label="SEK"
            questionId="price"
            answers={answers}
            onValueUpdate={(value) => {
              setAnswers({
                ...answers,
                price: value
              });
            }}
            onPrevious={() => {
              setQuestionStep(questionStep - 1);
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            previousButtonLabel="Back"
            buttonLabel="Continue" />
        )}
        {questionStep === 6 && (
          <Summary
            summaryTitle="Your requirements are:"
            answers={answers}
            onPrevious={() => {
              setQuestionStep(questionStep - 1);
            }}
            onNext={() => {
              setQuestionStep(questionStep + 1);
            }}
            previousButtonLabel="Back"
            buttonLabel="Show me homes" />
        )}
        {questionStep === 7 && (
          <Results
            resultsTitle="Here are your results:"
            answers={answers}
            onNext={() => {
              setQuestionStep(1);
            }}
            buttonLabel="Search again" />
        )}
      </>
    );
  }
  const progressBar = () => {
    const percentage = Math.floor((questionStep / 6) * 100)
    return (
      <div className="progres-bar-container">
        <ProgressBar striped variant="danger" now={percentage} label={`${percentage}% completed`} />
      </div>
    );
  }
  return (
    <div>
      {printQuestions()}
      {questionStep > 0 && questionStep < 7 ? progressBar() : ''}
    </div>
  )
};