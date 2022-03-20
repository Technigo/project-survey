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
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [weather, setWeather] = useState('');

 
  const onStepChange = () => {
    setStep(step + 1)
  }
  const onNameChange = (event) => {
    setName(event.target.value)
  }
  const onLevelChange = (event) => {
    setLevel(event.target.value)
  }

  const onGoalChange = (event) => {
    setGoal(event.target.value)
  }
  const onWeatherChange = (event) => {
    setWeather(event.target.value)
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
         level={level}
         onLevelChange={onLevelChange}
         onStepChange={onStepChange}
         />
      )}
    
    {step === 3 && (
         <Question2
         goal={goal}
         onGoalChange={onGoalChange}
         onStepChange={onStepChange}
         />
      )}

    {step === 4 && (
         <Question3
         weather={weather}
         onWeatherChange={onWeatherChange}
         onStepChange={onStepChange}
         />
      )}

    {step === 5 && (
         <Overview
         name={name}
         level={level}
         goal={goal}
         weather={weather}
         />
      )}
      <Footer />

    </div>
  )
}

export default Form