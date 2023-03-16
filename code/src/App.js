import React, { useState } from 'react';
import { LandingPage } from 'components/LandingPage';
import { Department } from 'components/Department';
import { Climate } from 'components/Climate';
import { Activity } from 'components/Activity';
import { Result } from 'components/Result';

export const App = () => {
  const [question, setQuestion] = useState(0);
  const [department, setDepartment] = useState('');
  const [climate, setClimate] = useState('');
  const [activity, setActivity] = useState('');

  const handleStepIncrease = () => {
    setQuestion(question + 1);
  }

  return (
    <>
      {question === 0 && (
        <>
          <LandingPage question={question} setQuestion={setQuestion} />
          <button type="button" className="button-start" onClick={handleStepIncrease}>Start</button>
        </>
      )}
      {question === 1 && (
        <Department department={department} setDepartment={setDepartment} />
      )}
      {question === 2 && (
        <Climate climate={climate} setClimate={setClimate} />
      )}
      {question === 3 && (
        <>
          <Activity activity={activity} setActivity={setActivity} />
          <button type="button" className="button-submit" onClick={handleStepIncrease}>Submit</button>
        </>
      )}
      {question >= 4 && (
        <Result department={department} climate={climate} activity={activity} />
      )}

      {question >= 1 && question < 3 && (
        <>
          <button type="button" className="button-next" onClick={handleStepIncrease}>Next question</button>
          <p>Question {question}/3</p>
        </>
      )}
    </>
  );
}
