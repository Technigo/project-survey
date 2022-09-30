/* eslint-disable max-len */
import React, { useState } from 'react';

import Name from './Name';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import QuestionThree from './QuestionThree';
import Summary from './Summary';

const Survey = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [questionOne, setQuestionOne] = useState('');
  const [characterGroup, setCharacterGroup] = useState('');
  const [questionTwo, setQuestionTwo] = useState('');
  const [workAlternative, setWorkAlternative] = useState('');
  const [questionThree, setQuestionThree] = useState('');
  const [bossMeme, setBossMeme] = useState('');

  const onQuestionOneInputChange = (event) => {
    setQuestionOne(event.target.value);
  }

  const onInputChange = (event) => {
    setQuestionTwo(event.target.value);
  }

  const onQuestionThreeInputChange = (event) => {
    setQuestionThree(event.target.value);
  }
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
        <QuestionOne setQuestionOne={setQuestionOne} onStepChange={onStepChange} onQuestionOneInputChange={onQuestionOneInputChange} setCharacterGroup={setCharacterGroup} questionOne={questionOne} characterGroup={characterGroup} />
      )}

      {step === 3 && (
        // eslint-disable-next-line react/jsx-no-bind
        <QuestionTwo setQuestionTwo={setQuestionTwo} onStepChange={onStepChange} onInputChange={onInputChange} setWorkAlternative={setWorkAlternative} questionTwo={questionTwo} workAlternative={workAlternative} />
      )}

      {step === 4 && (
        // eslint-disable-next-line react/jsx-no-bind
        <QuestionThree setQuestionThree={setQuestionThree} onQuestionThreeInputChange={onQuestionThreeInputChange} setBossMeme={setBossMeme} questionThree={questionThree} bossMeme={bossMeme} onStepChange={onStepChange} />
      )}

      {step === 5 && (
        // eslint-disable-next-line react/jsx-no-bind
        <Summary name={name} setQuestionOne={setQuestionOne} etCharacterGroup={setCharacterGroup} questionOne={questionOne} characterGroup={characterGroup} setQuestionTwo={setQuestionTwo} onStepChange={onStepChange} setWorkAlternative={setWorkAlternative} questionTwo={questionTwo} workAlternative={workAlternative} questionThree={questionThree} bossMeme={bossMeme} />
      )}

      {step < 2 && (
        <div className="lastButton">
          <button className="lastButton" type="button" onClick={onStepChange}>Start here!</button>
        </div>
      )}
    </>
  );
}

export default Survey;