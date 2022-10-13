import React, { useState } from 'react';

import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'
import FifthQuestion from './FifthQuestion'
import SixthQuestion from './SixthQuestion'
import SeventhQuestion from './SeventhQuestion'
import TheEnd from './TheEnd'
import FirstPage from './FirstPage'

import 'index.css';
import YourProfessional from './YourProfessional';

const Form = () => {
  //  const states
  const [counter, setCounter] = useState(0);
  const [nameInput, setNameInput] = useState('');
  const [brushInput, setBrushInput] = useState();
  const [frequencyInput, setFrequencyInput] = useState();
  const [checkboxGroup, setCheckboxGroup] = useState([]);
  const [goalInput, setGoalInput] = useState();
  const [flossInput, setFlossInput] = useState();
  const [requestInput, setRequestInput] = useState();

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

  const onCheckboxGroupToggle = (checkboxValue) => {
    if (checkboxGroup.includes(checkboxValue)) {
      setCheckboxGroup(checkboxGroup.filter((item) => item !== checkboxValue))
    } else {
      setCheckboxGroup([checkboxValue, ...checkboxGroup])
    }
  }

  const onFlossInputChange = (event) => {
    setFlossInput(event.target.value)
  }

  const onGoalInputChange = (event) => {
    setGoalInput(event.target.value)
  }

  const onRequestInputChange = (event) => {
    setRequestInput(event.target.value)
  }

  // return question carousel
  return (
    <main className="main-contaniner">
      {counter === 0
      && <FirstPage onNextQuestionChange={onNextQuestionChange} />}

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
      {counter === 4 && (
        <FourthQuestion
          checkboxGroup={checkboxGroup}
          onChangeFunction={onCheckboxGroupToggle}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
      {counter === 5 && (
        <FifthQuestion
          flossInput={flossInput}
          onFlossInputChange={onFlossInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
      {counter === 6 && (
        <SixthQuestion
          goalInput={goalInput}
          onGoalInputChange={onGoalInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
      {counter === 7 && (
        <SeventhQuestion
          requestInput={requestInput}
          onRequestInputChange={onRequestInputChange}
          onNextQuestionChange={onNextQuestionChange}
          onPreviousQuestionChange={onPreviousQuestionChange} />
      )}
      {counter === 8 && (
        <TheEnd
          nameInput={nameInput}
          brushInput={brushInput}
          frequencyInput={frequencyInput}
          checkboxGroup={checkboxGroup}
          flossInput={flossInput}
          goalInput={goalInput}
          requestInput={requestInput}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onNextQuestionChange={onNextQuestionChange} />
      )}
      {counter === 9 && (
        <YourProfessional />
      )}
    </main>
  );
}
export default Form