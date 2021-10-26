import React, { useState } from 'react'

import FirstQuestion from './FirstQuestion'
import SecondQuestion from './SecondQuestion'
import ThirdQuestion from './ThirdQuestion'
import FourthQuestion from './FourthQuestion'
import FifthQuestion from './FifthQuestion'
import SixthQuestion from './SixthQuestion'
import Overview from './Overview'
import ConfessionRoom from './ConfessionRoom'

const Form = () => {
  const [confessionRoom, setConfessionRoom] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput ] = useState('')
  const [noOfConfession, setNoOfConfession] = useState('')
  const [badSin, setBadSin] = useState('')
  const [noOfBadThings, setNoOfBadThings] = useState('')
  const [finalConfession, setFinalConfession] = useState('')
  const [step, setStep] = useState(1)
 
  const onConfessionChange = (confession) => {
    setConfessionRoom(confession)
  }
  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
}
const onAgeChange = (event) => {
  setAgeInput(event.target.value)
}
const onNoOfConfessionChange = (noOfConfession) => {
  setNoOfConfession(noOfConfession)
}
  const onBadSinChange = (event) => {
    setBadSin(event.target.value)
  }
  const onNoOfBadThingsChange = (noOfBadThings) => {
    setNoOfBadThings(noOfBadThings)
  }
  const onFinalConfessionChange = (event) => {
    setFinalConfession(event.target.value)
  }
  const onStepChange = () => {
    setStep(step + 1)
}

return (
  <div> 
    {step === 1 && (
      <ConfessionRoom
      confession={confessionRoom}
      onConfessionChange={onConfessionChange}
      onStepChange={onStepChange}
      />
    )}
    {step === 2 && (
      <>
      <FirstQuestion
      nameInput={nameInput}
      onNameInputChange={onNameInputChange}
      onStepChange={onStepChange}
      />
      <SecondQuestion
      ageInput={ageInput}
      onAgeChange={onAgeChange}
      onStepChange={onStepChange}
      />
      </>
    )}
    {step === 3 && (
      <>
      <ThirdQuestion 
      noOfConfession={noOfConfession}
      onNoOfConfessionChange={onNoOfConfessionChange}
      />
      <FourthQuestion
        badSin={badSin}
        onBadSinChange={onBadSinChange}
      />
      <FifthQuestion
      noOfBadThings={noOfBadThings}
      onNoOfBadThingsChange={onNoOfBadThingsChange}
      onStepChange={onStepChange}
      />
      </>
    )}
    {step === 4 && (
      <SixthQuestion 
      finalConfession={finalConfession}
      onFinalConfessionChange={onFinalConfessionChange}
      onStepChange={onStepChange}
      />
    )}
    {step === 5 && (
      <>
      <Overview
      nameInput={nameInput}
      ageInput={ageInput}
      noOfConfession={noOfConfession}
      badSin={badSin}
      noOfBadThings={noOfBadThings}
      finalConfession={finalConfession}
      />
      </>
    )}
  </div>
)}

export default Form