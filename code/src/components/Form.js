import React, { useState } from 'react'
import Intro from './Intro'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'
import Summery from './Summery'
import Progress_bar from './Progress_bar'


const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [surnameInput, setSurnameInput] = useState('')
  const [step, setStep] = useState(0)
  const [selectOption, setSelectOption] = useState('')
  const [radioInput, setRadioInput] = useState('')
    

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onSurNameInputChange = (event) => {
    setSurnameInput(event.target.value)
  }

  const onSelectOptionChange = (event) => {
    setSelectOption(event.target.value)
  }

  const onRadioInputChange = (event) => {
    setRadioInput(event.target.value)
  }

  const onStepChange = () => {
      setStep(step + 1)
  }

  // const refreshPage = () => { 
  //   window.location.reload(true)
  // }

//   const onEndStep = () => {
//     setStep(step === )
// }

  // const btnScroll = () => {
  //   executeScroll = document.getElementById('one')
  // }

  return (
    <div>
        <Progress_bar />

        {step === 0 && (
            <Intro 
                onStepChange={onStepChange}
            />
        )}
        {step === 1 && (
            <QuestionOne 
                nameInput={nameInput}
                onNameInputChange={onNameInputChange}
                onStepChange={onStepChange}
            />
            )}
        {step === 2 && (
            <>
            <h2>Nice to meet you {nameInput}!</h2>
            <QuestionTwo 
                surname={surnameInput}
                onSurNameInputChange={onSurNameInputChange}
                onStepChange={onStepChange}
            />
            </>
        )}
        {step === 3 && (
            <QuestionThree 
                selectOption={selectOption}
                onSelectOptionChange={onSelectOptionChange}
                onStepChange={onStepChange}
            />
         )}
        {step === 4 && (
            <QuestionFour 
                radioInput={radioInput}
                onRadioInputChange={onRadioInputChange}
                onStepChange={onStepChange}
            />
         )}
         {step === 5 && (
            <Summery 
                nameInput={nameInput} 
                surnameInput={surnameInput}
                selectOption={selectOption}
                radioInput={radioInput}
            />
         )}
    </div>
  )

}

export default Form
