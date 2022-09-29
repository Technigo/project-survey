import React, { useState } from 'react'

import WelcomePage from './WelcomePage'
import NameAndQuestion from './NameAndQuestion'
import PastaKindQuestion from './PastaKindQuestion';
import OtherIngredientQuestion from './OtherIngredientQuestion';
import HungerQuestion from './HungerQuestion';
import Overveiw from './Overveiw';

const Summary = () => {
  const [nameInput, setNameInput] = useState('')
  const [preference, setPreference] = useState('')
  const [sortOfPasta, setSortOfPasta] = useState('')
  const [otherIngredient, setOtherIngredient] = useState('')
  const [hungerInput, setHungerInput] = useState('')

  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  const onPreferenceChange = (event) => {
    setPreference(event.target.value)
  }
  const onSortOfPastaChange = (event) => {
    setSortOfPasta(event.target.value)
  }
  const onOtherIngredientChange = (event) => {
    setOtherIngredient(event.target.value)
  }
  const onHungerInputChange = (event) => {
    setHungerInput(event.target.value)
  }
  const onStepChange = () => {
    setStep(step + 1)
  }
  const onPreviousQuestionChange = () => {
    setStep(step - 1);
  };

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setStep(step + 1);
    }
  };
  return (
    <div>
      {step === 1 && (
        <WelcomePage
          onStepChange={onStepChange} />
      )}
      {step === 2 && (
        <NameAndQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          preference={preference}
          onPreferenceChange={onPreferenceChange}
          onStepChange={onStepChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onEnter={onEnter} />
      )}
      {step === 3 && (
        <PastaKindQuestion
          sortOfPasta={sortOfPasta}
          onSortOfPastaChange={onSortOfPastaChange}
          onStepChange={onStepChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onEnter={onEnter} />
      )}
      {step === 4 && (
        <OtherIngredientQuestion
          otherIngredient={otherIngredient}
          onOtherIngredientChange={onOtherIngredientChange}
          onStepChange={onStepChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onEnter={onEnter} />
      )}
      {step === 5 && (
        <HungerQuestion
          hungerInput={hungerInput}
          onHungerInputChange={onHungerInputChange}
          onStepChange={onStepChange}
          onPreviousQuestionChange={onPreviousQuestionChange}
          onEnter={onEnter} />
      )}
      {step === 6 && (
        <Overveiw
          nameInput={nameInput}
          preference={preference}
          sortOfPasta={sortOfPasta}
          otherIngredient={otherIngredient}
          hungerInput={hungerInput} />
      )}
    </div>
  )
}

export default Summary
