import React, { useState } from 'react'
import Intro from './Intro'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'
import QuestionFive from './QuestionFive'
import Summery from './Summery'
// import Progress_bar from './Progress_bar'


const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [guestInput, setGuestInput] = useState('')
  const [step, setStep] = useState(0)
  const [selectOption, setSelectOption] = useState('')
  const [radioInput, setRadioInput] = useState('')
  const [select2Option, setSelect2Option] = useState('')
  // const [anchorTarget, setAnchorTarget] = useState(null);
    

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onGuestInputChange = (event) => {
    setGuestInput(event.target.value)
  }

  const onSelectOptionChange = (event) => {
    setSelectOption(event.target.value)
  }

  const onRadioInputChange = (event) => {
    setRadioInput(event.target.value)
  }

  const onSelect2OptionChange = (event) => {
    setSelect2Option(event.target.value)
  }

  const onStepChange = () => {
      setStep(step + 1)
  }

  const onStepBackChange = () => {
    setStep(step - 1)
}


  return (
    <main>

        {/* <Progress_bar /> */}

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
                onStepBackChange={onStepBackChange}
            />
            )}
        {step === 2 && (
            <>
            {/* <h2>Nice to meet you {nameInput}!</h2> */}
            <QuestionTwo 
                nameInput={nameInput} 
                guestInput={guestInput}
                onGuestInputChange={onGuestInputChange}
                onStepChange={onStepChange}
                onStepBackChange={onStepBackChange}
            />
            </>
        )}
        {step === 3 && (
            <QuestionThree 
                selectOption={selectOption}
                onSelectOptionChange={onSelectOptionChange}
                onStepChange={onStepChange}
                onStepBackChange={onStepBackChange}
            />
         )}
        {step === 4 && (
            <QuestionFour 
                radioInput={radioInput}
                onRadioInputChange={onRadioInputChange}
                onStepChange={onStepChange}
                onStepBackChange={onStepBackChange}
            />
         )}
          {step === 5 && (
            <QuestionFive 
                select2Option={select2Option}
                onSelect2OptionChange={onSelect2OptionChange}
                onStepChange={onStepChange}
                onStepBackChange={onStepBackChange}
            />
         )}
         {step === 6 && (
            <Summery 
                nameInput={nameInput} 
                guestInput={guestInput}
                selectOption={selectOption}
                radioInput={radioInput}
                select2Option={select2Option}
                onStepBackChange={onStepBackChange}
            />
         )}
    </main>
  )

}

export default Form
