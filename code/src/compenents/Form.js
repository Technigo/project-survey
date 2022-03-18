import React, { useState } from 'react'


import IntroPage from './IntroPage'
import Question1 from './Question1'
import Question2 from './Question2'
import Question3 from './Question3'
import Overview from './Overview'
import Footer from './Footer'

const Form = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [house, setHouse] = useState('');
  const [pet, setPet] = useState('');
  const [wand, setWand] = useState('');

 
  const onStepChange = () => {
    setStep(step + 1)
  }
  const onNameChange = (event) => {
    setName(event.target.value)
  }
  const onHouseChange = (event) => {
    setHouse(event.target.value)
  }

  const onPetChange = (event) => {
    setPet(event.target.value)
  }
  const onWandChange = (event) => {
    setWand(event.target.value)
  }


  return (
    <div>
      {step === 1 && (
        <IntroPage
          name={name}
          onNameChange={onNameChange}
          onStepChange={onStepChange}
        />
      )}

      {step === 2 && (
         <Question1
         name={name}
         house={house}
         onHouseChange={onHouseChange}
         onStepChange={onStepChange}
         />
      )}
    
    {step === 3 && (
         <Question2
         pet={pet}
         onPetChange={onPetChange}
         onStepChange={onStepChange}
         />
      )}

    {step === 4 && (
         <Question3
         wand={wand}
         onWandChange={onWandChange}
         onStepChange={onStepChange}
         />
      )}

    {step === 5 && (
         <Overview
         name={name}
         house={house}
         pet={pet}
         wand={wand}
         />
      )}
      <Footer />

    </div>
  )
}

export default Form