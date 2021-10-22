import React, { useState } from 'react';

import data from '../data.json';
import StartPage from './StartPage';
import StartQuiz from './StartQuiz';
import QuestionRadioBtn from './QuestionRadioBtn';
import QuestionThree from './QuestionThree';
import QuestionFour from './QuestionFour';
import QuestionFive from './QuestionFive';
import Summary from './Summary';
import ProgressBar from './ProgressBar';

// global variable
const saveSelectedAnswers = [];

const Quiz = () => {
  const [step, setStep] = useState(-1);
  const [answer, setAnswer] = useState('');

  const onAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
    // want the default value for the question 5 to be 50 (slider), min value is 50
    if (step === 4) {
      setAnswer(50);
    }
  };

  const handleSubmit = (event, selectedAnswer) => {
    // prevent page reload
    event.preventDefault();
    // increase step
    onStepChange();
    // save the selected answer in an array named saveSelectedAnswers
    saveSelectedAnswers[step - 1] = selectedAnswer;
  };
  // when user click on Prev-button, it will decrease the step
  const handlePrevButton = () => {
    setStep(step - 1);
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
        {step === -1 && <StartPage onStepChange={onStepChange} />}
        {step === 0 && (
          <StartQuiz
            startQuizText={data.startQuizHtml}
            onStepChange={onStepChange}
          />
        )}
        {step >= 1 && step <= 2 && (
          <QuestionRadioBtn
            questionData={data.pages[step - 1].questions[0]}
            questionAnswer={answer}
            onAnswerChange={onAnswerChange}
            handleSubmit={handleSubmit}
            handlePrevButton={handlePrevButton}
          />
        )}
        {step === 3 && (
          <QuestionThree
            questionThreeData={data.pages[2].questions[0]}
            questionAnswer={answer}
            onAnswerChange={onAnswerChange}
            handleSubmit={handleSubmit}
            handlePrevButton={handlePrevButton}
          />
        )}
        {step === 4 && (
          <QuestionFour
            questionFourData={data.pages[3].questions[0]}
            questionAnswer={answer}
            onAnswerChange={onAnswerChange}
            handleSubmit={handleSubmit}
            handlePrevButton={handlePrevButton}
          />
        )}
        {step === 5 && (
          <QuestionFive
            questionFiveData={data.pages[4].questions[0]}
            questionAnswer={answer}
            onAnswerChange={onAnswerChange}
            handleSubmit={handleSubmit}
            handlePrevButton={handlePrevButton}
          />
        )}
        {step === 6 && (
          <Summary
            correctAnswers={data.pages.map(
              (page) => page.questions[0].correctAnswer
            )}
            selectedAnswers={saveSelectedAnswers}
          />
        )}
        {step >= 1 && step <= 5 && (
          // Progress bar for question 1 to 5
          <ProgressBar completed={step} totalQuestions={data.pages.length} />
        )}
        <footer>
          <p aria-label='Quiz time by Katie Wu. Team Foxes, Technigo.'>
            &#169; by Katie Wu
          </p>
          <p aria-hidden='true'>
            Team Foxes
            <span role='img' aria-label='fox emoji'>
              &nbsp;🦊&nbsp;
            </span>
            | Technigo
          </p>
        </footer>
      </section>
    </>
  );
};

export default Quiz;
