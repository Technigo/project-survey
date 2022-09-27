import React, { useState } from 'react';

import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FirstPage from './FirstPage'

const Form = () => {
  //  const states
  const [counter, setCounter] = useState(0);
  const [nameInput, setNameInput] = useState('');
  const [brushInput, setBrushInput] = useState();
  const [frequencyInput, setFrequencyInput] = useState();
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

  const onBrushInputChange = (event) => {
    setBrushInput(event.target.value)
  }

  const onFrequencyInputChange = (event) => {
    setFrequencyInput(event.target.value)
  }

  // return question carousel
  return (
    <main className="main-contaniner">
      {counter === 0 && <FirstPage onNextQuestionChange={onNextQuestionChange} />}
      {counter === 1 && (
        <FirstQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
      {counter === 2 && (
        <SecondQuestion
          brushInput={brushInput}
          onBrushInputChange={onBrushInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
      {counter === 3 && (
        <ThirdQuestion
          frequencyInput={frequencyInput}
          onFrequencyInputChange={onFrequencyInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
    </main>
  );
}
export default Form