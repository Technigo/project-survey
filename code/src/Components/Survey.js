import React, { useState } from 'react';
import { TextQuestion } from 'Components/TextQuestion';

export const Survey = () => {
  const [questionStep, setQuestionStep] = useState(1);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const printQuestions = () => {
    if (questionStep === 1) {
      return (
        <TextQuestion label="First Name" questionId="firstName" onValueUpdate={(value) => { setFirstName(value) }} onNext={() => { setQuestionStep(questionStep + 1) }} />
      )
    }
    if (questionStep === 2) {
      return (
        <TextQuestion label="First Name" questionId="firstName" onValueUpdate={(value) => { setLastName(value) }} onNext={() => { setQuestionStep(questionStep + 1) }} />
      )
    }
  }
  return (
    <div>
      <form>
        <section className="">
          {printQuestions()}
        </section>
      </form>
      <div>
        <p>{questionStep}</p>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
    </div>
  );
};