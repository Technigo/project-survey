import React, { useState } from 'react';

import data from '../data.json';
import StartPage from './StartPage';
import StartQuiz from './StartQuiz';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import QuestionFour from './QuestionFour';
import QuestionFive from './QuestionFive';
import Summary from './Summary';
import ProgressBar from './ProgressBar';

// style={{display: this.className.neon-text ? 'block' : 'none' }}

// global variable
const saveSelectedAnswers = [];
const totalQuestions = data.pages.length;

const Quiz = () => {
  // const updateProgressBar = (step) => {
  //   progressBarData.completed = step;
  // };

  const [step, setStep] = useState(-1);
  const [questionOne, setQuestionOne] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [questionThree, setQuestionThree] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [questionFour, setQuestionFour] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [questionFive, setQuestionFive] = useState(50);

  // const saveSelectedAnswer = (answer) => {
  //   saveSelectedAnswers.push(answer);
  // };

  const onQuestionOneChange = (event) => {
    setQuestionOne(event.target.value);
    // saveSelectedAnswer(event.target.value);
    saveSelectedAnswers[0] = event.target.value;
  };

  const onQuestionTwoChange = (event) => {
    setQuestionTwo(event.target.value);
    // saveSelectedAnswer(event.target.value);
    saveSelectedAnswers[1] = event.target.value;
  };

  const onQuestionThreeChange = (event) => {
    setQuestionThree(event.target.value);
    // saveSelectedAnswer(event.target.value);
    saveSelectedAnswers[2] = event.target.value;
  };

  const onQuestionFourChange = (event) => {
    setQuestionFour(event.target.value);
    saveSelectedAnswers[3] = event.target.value;
  };

  const onQuestionFiveChange = (event) => {
    setQuestionFive(event.target.value);
    saveSelectedAnswers[4] = event.target.value;
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  const handleSubmit = (event) => {
    // saveSelectedAnswer(event.target.value);
    event.preventDefault();
    onStepChange();
  };

  return (
    <>
      {/* background image */}
      <img
        src='./assets/bg-image.jpg'
        alt='white background with cactus'
        className='background-image'
      />

      <section>
        {step === -1 && (
          <StartPage
            // startPageInput={startPageInput}
            // onStartPageInputChange={onStartPageInputChange}
            onStepChange={onStepChange}
          />
        )}
        {step === 0 && (
          <StartQuiz
            startQuizText={data.startQuizHtml}
            onStepChange={onStepChange}
          />
        )}
        {step === 1 && (
          <>
            <QuestionOne
              questionOneData={data.pages[0].questions[0]}
              questionOneAnswer={questionOne}
              onQuestionOneChange={onQuestionOneChange}
              handleSubmit={handleSubmit}
            />
            {/* <div className='progress-bar'> */}
            <ProgressBar completed={step} totalQuestions={totalQuestions} />
            {/* </div> */}
          </>
        )}
        {step === 2 && (
          <>
            <QuestionTwo
              questionTwoData={data.pages[1].questions[0]}
              questionTwoAnswer={questionTwo}
              onQuestionTwoChange={onQuestionTwoChange}
              handleSubmit={handleSubmit}
            />
            <ProgressBar completed={step} totalQuestions={totalQuestions} />
          </>
        )}
        {step === 3 && (
          <>
            <QuestionThree
              questionThreeData={data.pages[2].questions[0]}
              // questionThreeAnswer={questionThree}
              onQuestionThreeChange={onQuestionThreeChange}
              handleSubmit={handleSubmit}
            />
            <ProgressBar completed={step} totalQuestions={totalQuestions} />
          </>
        )}
        {step === 4 && (
          <>
            <QuestionFour
              questionFourData={data.pages[3].questions[0]}
              // questionFourAnswer={questionFour}
              onQuestionFourChange={onQuestionFourChange}
              handleSubmit={handleSubmit}
            />
            <ProgressBar completed={step} totalQuestions={totalQuestions} />
          </>
        )}
        {step === 5 && (
          <>
            <QuestionFive
              questionFiveData={data.pages[4].questions[0]}
              questionFive={questionFive}
              onQuestionFiveChange={onQuestionFiveChange}
              handleSubmit={handleSubmit}
            />
            <div className='progress-bar'>
              <ProgressBar completed={step} totalQuestions={totalQuestions} />
            </div>
          </>
        )}
        {step === 6 && (
          <Summary
            correctAnswers={data.pages.map(
              (page) => page.questions[0].correctAnswer
            )}
            selectedAnswers={saveSelectedAnswers}
          />
        )}
      </section>
      <footer>
        <p>&#169; by Katie Wu</p>
        <p>
          Team Foxes
          <span role='img' aria-label='fox emoji'>
            &nbsp;🦊&nbsp;
          </span>
          | Technigo
        </p>
      </footer>
    </>
  );
};

export default Quiz;
