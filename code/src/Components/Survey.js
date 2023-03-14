import React, { useState } from 'react';
import { TextQuestion } from 'Components/TextQuestion';
import { RadioQuestion } from 'Components/RadioQuestion';
import { SelectQuestion } from 'Components/SelectQuestion';

export const Survey = () => {
  const [questionStep, setQuestionStep] = useState(1);
  const [firstName, setFirstName] = useState();
  const [typeOfHome, setTypeOfHome] = useState();

  const printQuestions = () => {
    return (
      <>
        {questionStep === 1 && (
          <TextQuestion label="First Name" questionId="firstName" onValueUpdate={(value) => { setFirstName(value) }} onNext={() => { setQuestionStep(questionStep + 1) }} buttonLabel="Continue" />
        )}
        {questionStep === 2 && (
          <RadioQuestion label={['villa', 'apartment']} questionId="typeOfHome" onValueUpdate={(value) => { setTypeOfHome(value) }} onNext={() => { setQuestionStep(questionStep + 1) }} buttonLabel="Continue" />
        )}
        {questionStep === 3 && (
          <SelectQuestion option={[1, 2, 3]} questionId="firstName" onValueUpdate={(value) => { setFirstName(value) }} onNext={() => { setQuestionStep(questionStep + 1) }} buttonLabel="Continue" />
        )}
      </>
    )
  }
  return (
    <div>
      <form>
        <section className="">
          {printQuestions()}
        </section>
      </form>
      <div>
        <p>Question Step: {questionStep} </p>
        <p>{firstName}</p>
        <p>{typeOfHome}</p>
      </div>
    </div>
  );
};

