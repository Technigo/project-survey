import React, { useState } from 'react';

import FirstQuestion from 'FirstQuestion'
import FirstPage from './FirstPage'

const Form = () => {
  //  const states ----
  const [counter, setCounter] = useState(0);
  const [nameInput, setNameInput] = useState('');

  //  functions
  const onNextQuestionChange = () => {
    setCounter(counter + 1)
  }

  const onPreviousQuestionChange = () => {
    setCounter(counter - 1)
  }

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  return (
    <main className="main-contaniner">
      {counter === 0 && <FirstPage onNextQuestionChange={onNextQuestionChange} />}
      {counter === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )};
    </main>
  );
}
export default Form