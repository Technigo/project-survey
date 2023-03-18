/* eslint-disable max-len */
import React, { useState } from 'react';
import Background from 'components/Background';
import Header from 'components/Header';
import QuestionOne from 'components/QuestionOne';

export const App = () => {
  const [step, setStep] = useState(0);
  const [questionOne, setQuestionOne] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(1);
  };

  return (
    <>
      <Background />
      <Header />
      <form className="question-wrapper" onSubmit={handleSubmit} title="Space tour company Survey">
        {step === 0 && (
          <QuestionOne
            QuestionOne={questionOne}
            setQuestionOne={setQuestionOne} />
        )}
      </form>
    </>
  )
}
export default App;
