import React, { useState } from 'react';

import data from '../data.json';
import StartPage from './StartPage';
import StartQuiz from './StartQuiz';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import Summary from './Summary';

// style={{display: this.className.neon-text ? 'block' : 'none' }}

// global variable
const saveSelectedAnswers = [];

const Quiz = () => {
  // console.log(data.pages[0].questions[0].correctAnswer);
  // console.log(data.pages[1].questions[0].correctAnswer);
  // console.log(data.pages[1].questions[0].img_url);
  // console.log(data.pages[0].questions[0].html);
  //   const [hidden, setHidden] = useState(false);
  // const [nextQuestion, setNextQuestion] = useState(-1);

  const [step, setStep] = useState(-1);
  const [questionOne, setQuestionOne] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  // const [saveSelectedAnswers, setSaveSelectedAnswers] = useState('');

  const saveSelectedAnswer = (answer) => {
    console.log('answer: ', answer);
    console.log('before selected answer: ', saveSelectedAnswers);
    saveSelectedAnswers.push(answer);
    console.log('after selected answer: ', saveSelectedAnswers);
  };

  const onQuestionOneChange = (event) => {
    setQuestionOne(event.target.value);
    saveSelectedAnswer(event.target.value);
  };

  const onQuestionTwoChange = (event) => {
    setQuestionTwo(event.target.value);
    saveSelectedAnswer(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
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
          <QuestionOne
            questionOneData={data.pages[0].questions[0]}
            onStepChange={onStepChange}
            questionOneAnswer={questionOne}
            onQuestionOneChange={onQuestionOneChange}
          />
        )}
        {step === 2 && (
          <QuestionTwo
            questionTwoData={data.pages[1].questions[0]}
            onStepChange={onStepChange}
            questionTwoAnswer={questionTwo}
            onQuestionTwoChange={onQuestionTwoChange}
          />
        )}
        {step === 3 && (
          <Summary
            correctAnswers={data.pages.map(
              (page) => page.questions[0].correctAnswer
            )}
            selectedAnswers={saveSelectedAnswers}
          />
        )}
      </section>
    </>
  );
};

export default Quiz;
