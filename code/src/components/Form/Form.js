import React, { useState } from 'react';

import { questions } from 'data/questions';
import { defaultData } from 'data/defaultFormData';

import Card from 'components/Cards/Card';
import Steps from 'components/Steps/Steps';

const Form = () => {
  const [formData, setForm] = useState(defaultData);
  const [endState, setEndState] = useState(false);
  const [step, setStep] = useState(1);

  const inputProps = { formData, setForm };
  const stepProps = { step, setStep };

  const maxSteps = questions.length + 1;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === maxSteps) {
      setEndState(true);
    }
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        {questions.map(
          (question) => question.number === step && (
            <Card
              contentType="question"
              key={`question${question.number}`}
              {...question}
              {...inputProps} />
          )
        )}
        {step === maxSteps && !endState && <Card contentType="submission" />}
        {endState && <Card contentType="summary" data={formData} />}
      </form>
      {!endState && <Steps {...stepProps} maxSteps={maxSteps} />}
    </>
  );
};

export default Form;
