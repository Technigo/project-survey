/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable indent */
// eslint-disable-next-line quotes
import React, { useState } from 'react';

import Intro from './Intro';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import Outro from './Outro';

const Form = () => {
  const [step, setStep] = useState(1);
  const changeStep = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && <Intro changeStep={changeStep} />}
      {step === 2 && <QuestionOne changeStep={changeStep} />}
      {step === 3 && <QuestionTwo changeStep={changeStep} />}
      {step === 4 && <QuestionThree changeStep={changeStep} />}
      {step === 5 && <Outro />}
    </div>
  );
};

export default Form;
