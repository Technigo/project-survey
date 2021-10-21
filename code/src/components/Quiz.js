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

// global variable
const saveSelectedAnswers = [];

const Quiz = () => {
  const [step, setStep] = useState(-1);
  const [answer, setAnswer] = useState('');
  // to do!! Fix State 50 question 5. And Progress Bar!
  // const [questionFive, setQuestionFive] = useState(50);

  const onAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  const handleSubmit = (event, selectedAnswer) => {
    event.preventDefault();
    onStepChange();
    saveSelectedAnswers.push(selectedAnswer);
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
        {step === 1 && (
          <>
            <QuestionOne
              questionOneData={data.pages[0].questions[0]}
              questionAnswer={answer}
              onAnswerChange={onAnswerChange}
              handleSubmit={handleSubmit}
            />
            <ProgressBar completed={step} totalQuestions={data.pages.length} />
          </>
        )}
        {step === 2 && (
          <>
            <QuestionTwo
              questionTwoData={data.pages[1].questions[0]}
              questionAnswer={answer}
              onAnswerChange={onAnswerChange}
              handleSubmit={handleSubmit}
            />
            <ProgressBar completed={step} totalQuestions={data.pages.length} />
          </>
        )}
        {step === 3 && (
          <>
            <QuestionThree
              questionThreeData={data.pages[2].questions[0]}
              questionAnswer={answer}
              onAnswerChange={onAnswerChange}
              handleSubmit={handleSubmit}
            />
            <ProgressBar completed={step} totalQuestions={data.pages.length} />
          </>
        )}
        {step === 4 && (
          <>
            <QuestionFour
              questionFourData={data.pages[3].questions[0]}
              questionAnswer={answer}
              onAnswerChange={onAnswerChange}
              handleSubmit={handleSubmit}
            />
            <ProgressBar completed={step} totalQuestions={data.pages.length} />
          </>
        )}
        {step === 5 && (
          <>
            <QuestionFive
              questionFiveData={data.pages[4].questions[0]}
              questionAnswer={answer}
              onAnswerChange={onAnswerChange}
              handleSubmit={handleSubmit}
            />
            <ProgressBar completed={step} totalQuestions={data.pages.length} />
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
    </>
  );
};

export default Quiz;
