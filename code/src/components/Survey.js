/* eslint-disable max-len */
import React, { useState } from 'react';

import Name from './Name';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
// import { QuestionThree } from 'components/QuestionThree';
import Summary from './Summary';

const Survey = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [questionOne, setQuestionOne] = useState('');
  const [characterGroup, setCharacterGroup] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  const [workAlternative, setWorkAlternative] = useState('');
  // const [questionThree, setQuestionThree] = useState('');

  function onStepChange() {
    setStep(step + 1);
  }
  return (
    <>
      {step === 1 && (
        // eslint-disable-next-line react/jsx-no-bind
        <Name name={name} setName={setName} onStepChange={onStepChange} />
      )}

      {step === 2 && (
        // eslint-disable-next-line react/jsx-no-bind
        <QuestionOne name={name} setQuestionOne={setQuestionOne} onStepChange={onStepChange} setCharacterGroup={setCharacterGroup} questionOne={questionOne} characterGroup={characterGroup} />
      )}

      {step === 3 && (
        // eslint-disable-next-line react/jsx-no-bind
        <QuestionTwo name={name} setQuestionTwo={setQuestionTwo} onStepChange={onStepChange} setWorkAlternative={setWorkAlternative} questionTwo={questionTwo} workAlternative={workAlternative} />
      )}

      {step === 4 && (
        // eslint-disable-next-line react/jsx-no-bind
        <Summary name={name} setQuestionOne={setQuestionOne} etCharacterGroup={setCharacterGroup} questionOne={questionOne} characterGroup={characterGroup} setQuestionTwo={setQuestionTwo} onStepChange={onStepChange} setWorkAlternative={setWorkAlternative} questionTwo={questionTwo} workAlternative={workAlternative} />
      )}

      {step < 4 && (
        <div className="lastButton">
          <button className="lastButton" type="button" onClick={onStepChange}>Start here!</button>
        </div>
      )}
    </>
  );
}

export default Survey;