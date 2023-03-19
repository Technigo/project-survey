import React, { useState } from 'react';
import { Question1 } from 'components/Question1';
import { Question2 } from 'components/Question2';
import { Question3 } from 'components/Question3';
import { Question4 } from 'components/Question4';
import { Welcome } from 'components/Welcome';
import { Summary } from 'components/Summary';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState(0);
  const [answer4, setAnswer4] = useState('');

  const nextHandler = () => {
    setCounter(counter + 1);
  };

  const backHandler = () => {
    setCounter(counter - 1);
  };

  const restartSurvey = () => {
    setCounter(0);
    setAnswer1('');
    setAnswer2('');
    setAnswer3(0);
    setAnswer4('');
  };
 
  return (
    <div className="main-container">
      {counter === 0 && (
        <Welcome nextHandler={nextHandler} />
      )}
      {counter === 1 && (
        <Question1 answer1={answer1} setAnswer1={setAnswer1} />
      )}
      {counter === 2 && (
        <Question2 answer2={answer2} setAnswer2={setAnswer2} />
      )}
      {counter === 3 && (
        <Question3 answer3={answer3} setAnswer3={setAnswer3} />
      )}
      {counter === 4 && (
        <Question4 answer4={answer4} setAnswer4={setAnswer4} />
      )}
      {counter > 4 && (
        <>
          <Summary
            answer1={answer1}
            answer2={answer2}
            answer3={answer3}
            answer4={answer4} />
          <button className="restart-button" type="button" onClick={restartSurvey}>
          Restart survey
          </button>
        </>
      )}
      <div className="button-container">
        {counter > 0 && (
          <button type="button" onClick={backHandler}>
          Back
          </button>
        )
        }
        {counter > 0 && counter < 5 && (
          <>
            <p>Question: {counter}/4</p>
            <button type="button" onClick={nextHandler}>
              Next
            </button>
          </>
        )}
      </div>
    </div>
  ); 
};
