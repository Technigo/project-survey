import React from 'react';

import './Question3.css';

const answers = ['today', 'yesterday', 'last week', "I don't know"];

const Question3 = () => {
    return (
        <>
          <h2>Question3</h2>
          <p>When was the last time you saw it?</p>
          <select>
          {answers.map((answer) => {
              return <option value={answer}>{answer}</option>
          })}
          </select>
          <hr />
        </>
    )
}

export default Question3;