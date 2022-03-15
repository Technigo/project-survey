import React, {useState} from "react"
import Intro from './Intro'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'
import Summery from './Summery'



const Form = () => {

  // variabler för användar-input --> states
  const [step, setStep] = useState(0)
  const [nameInput, setNameInput] = useState('')
  const [musicInput, setMusicInput] = useState('')
  const [selectOptionInput, setSelectOptionInput] = useState('')
  const [radioInput, setRadioInput] = useState('')

  // FUNKTIONER FÖR NÄR NÅGON TRIGGAR ONCHANGE I KNAPPAR ELLER FORMULÄR
  
  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }
  
  const onMusicInputChange = (event) => {
    setMusicInput(event.target.value)
  }

  const onSelectOptionInputChange = (event) => {
    setSelectOptionInput(event.target.value)
  }
  
  const onRadioInputChange = (event) => {
    setRadioInput(event.target.value)
  }

  const onNextStepChange = () => {
    setStep(step + 1)
  }

  const onStepBackChange = () => {
    setStep(step - 1)
  }

  // Vad form-komponenten kallar på för andra komponeneter
  return (
    <main>

      {step === 0 && (
        <Intro 
          onNextStepChange={onNextStepChange}
        />
      )}
     
     {step === 1 && (
      <QuestionOne />
     )}

      <QuestionTwo />
      <QuestionThree />
      <QuestionFour />
      <Summery />
    </main>
    
  )
}

export default Form
