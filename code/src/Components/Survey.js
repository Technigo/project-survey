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
  const [answers, setAnswers] = useState({firstName:'Jamie', rooms: 3});

  const printQuestions = () => (
    <>
      {questionStep === 0 && (DisplayLandingPage(setQuestionStep, questionStep))}
      {questionStep === 1 && (DisplayNameQuestion(setAnswers, answers, setQuestionStep, questionStep))}
      {questionStep === 2 && (DisplayPropertyTypeQuestion(answers, setAnswers, setQuestionStep, questionStep))}
      {questionStep === 3 && (DisplayParkingQuestion(setAnswers, answers, setQuestionStep, questionStep))}
      {questionStep === 4 && (DisplayRoomsQuestion(setAnswers, answers, setQuestionStep, questionStep))}
      {questionStep === 5 && (DisplayBudgetQuestion(answers, setAnswers, setQuestionStep, questionStep))}
      {questionStep === 6 && (DisplaySummary(answers, setQuestionStep, questionStep))}
      {questionStep === 7 && (DisplayResults(answers, setQuestionStep))}
    </>
  )
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

const DisplayResults = (answers, setQuestionStep) => {
  return <Results
    resultsTitle="Here are your results:"
    answers={answers}
    onNext={() => {
      setQuestionStep(2);
    } }
    buttonLabel="Search again" />;
}

const DisplaySummary = (answers, setQuestionStep, questionStep) => {
  return <Summary
    summaryTitle="Your requirements are:"
    answers={answers}
    onPrevious={() => {
      setQuestionStep(questionStep - 1);
    } }
    onNext={() => {
      setQuestionStep(questionStep + 1);
    } }
    previousButtonLabel="Back"
    buttonLabel="Show me homes" />;
}

const DisplayBudgetQuestion = (answers, setAnswers, setQuestionStep, questionStep) => {
  return <RangeSliderQuestion
    questionTitle="How much would you spend on your new home?"
    label="SEK"
    questionId="price"
    answers={answers}
    onValueUpdate={(value) => {
      setAnswers({
        ...answers,
        price: value
      });
    } }
    onPrevious={() => {
      setQuestionStep(questionStep - 1);
    } }
    onNext={() => {
      setQuestionStep(questionStep + 1);
    } }
    previousButtonLabel="Back"
    buttonLabel="Continue" />;
}

const DisplayRoomsQuestion = (setAnswers, answers, setQuestionStep, questionStep) => {
  return <SelectQuestion
    questionTitle="How many rooms would you like?"
    option={[1, 2, 3]}
    questionId="rooms"
    onValueUpdate={(value) => {
      setAnswers({
        ...answers,
        rooms: value
      });
    } }
    onPrevious={() => {
      (answers.typeOfHome === 'Apartment'
        ? setQuestionStep(questionStep - 1) : setQuestionStep(questionStep - 2));
    } }
    onNext={() => {
      setQuestionStep(questionStep + 1);
    } }
    previousButtonLabel="Back"
    buttonLabel="Continue" />;
}

const DisplayParkingQuestion = (setAnswers, answers, setQuestionStep, questionStep) => {
  return <CheckboxQuestion
    questionTitle="Would you like a reserved parking spot near your apartment?"
    label="Yes"
    questionId="parking"
    onValueUpdate={(value) => {
      setAnswers({
        ...answers,
        parking: value
      });
    } }
    onPrevious={() => {
      setQuestionStep(questionStep - 1);
    } }
    onNext={() => {
      setQuestionStep(questionStep + 1);
    } }
    previousButtonLabel="Back"
    buttonLabel="Continue" />;
}

const DisplayPropertyTypeQuestion = (answers, setAnswers, setQuestionStep, questionStep) => {
  return <RadioQuestion
    questionGreeting={`Hello ${answers.firstName},`}
    questionTitle="What type of property are you looking for?"
    labels={['Villa', 'Apartment', 'Townhouse']}
    questionId="typeOfHome"
    onValueUpdate={(value) => {
      setAnswers({
        ...answers,
        typeOfHome: value
      });
    } }
    onPrevious={() => {
      setQuestionStep(questionStep - 1);
    } }
    onNext={() => {
      (answers.typeOfHome === 'Apartment'
        ? setQuestionStep(questionStep + 1) : setQuestionStep(questionStep + 2));
    } }
    previousButtonLabel="Back"
    buttonLabel="Continue" />;
}

const DisplayNameQuestion = (setAnswers, answers, setQuestionStep, questionStep) => {
  return <TextQuestion
    questionTitle="First things first, what shall we call you?"
    label="Name"
    questionId="firstName"
    onValueUpdate={(value) => {
      setAnswers({
        ...answers,
        firstName: value
      });
    } }
    answers={answers}
    onPrevious={() => {
      setQuestionStep(questionStep - 1);
    } }
    onNext={() => {
      setQuestionStep(questionStep + 1);
    } }
    previousButtonLabel="Back"
    buttonLabel="Continue" />;
}

const DisplayLandingPage = (setQuestionStep, questionStep) => {
  return <LandingPage
    landingTitle="Ready to find your dream home?"
    description="Let's get started!"
    onNext={() => {
      setQuestionStep(questionStep + 1);
    } }
    buttonLabel="Start" />;
}
