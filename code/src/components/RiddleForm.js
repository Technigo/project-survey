import React, { useState } from "react";
import Start from './Start'
import RiddleOne from './RiddleOne'
import RiddleTwo from './RiddleTwo'
import RiddleThree from './RiddleThree'
import RiddleFour from './RiddleFour'
import RiddleFive from './RiddleFive'
import Result from './Result'
import ProgressBar from './ProgressBar'

const RiddleForm = () => {
  
  const [username, setUsername] = useState('');
  const [step, setStep] = useState(0);
  const [riddleOne, setRiddleOne] = useState('');
  const [riddleTwo, setRiddleTwo] = useState('');
  const [riddleThree, setRiddleThree] = useState('');
  const [riddleFour, setRiddleFour] = useState('');
  const [riddleFive, setRiddleFive] = useState('');

  const onStepChange = () => {
    if (username.length > 0)
    setStep(step + 1)
    else (
      alert('Enter a name, precious!')
    )
  }

  const onRiddleFiveChange = (event) => {
    setRiddleFive(event.target.value)
  }

  const restartGame = () => {
    setUsername('');
    setStep(0)
  }
    
    return (
      <div>
      {step === 0 && (
        <Start
          username={username}
          setUsername={setUsername}
          onStepChange={onStepChange}
        />
      )}

      {step === 1 && (
       <>
        <RiddleOne
          riddleOne={riddleOne}
          setRiddleOne={setRiddleOne}
          onStepChange={onStepChange}
        />
        <ProgressBar step={step} />
        </>
      )}

      {step === 2 && (
        <>
        <RiddleTwo
          riddleTwo={riddleTwo}
          setRiddleTwo={setRiddleTwo}
          onStepChange={onStepChange}
        />
        <ProgressBar step={step} />
        </>
      )}

      {step === 3 && (
        <>
         <RiddleThree
          riddleThree={riddleThree}
          setRiddleThree={setRiddleThree}
          onStepChange={onStepChange}
         />
         <ProgressBar step={step} />
         </>
      )}
    
    {step === 4 && (
      <>
        <RiddleFour
          riddleFour={riddleFour}
          setRiddleFour={setRiddleFour}
          onStepChange={onStepChange}
        />
        <ProgressBar step={step} />
      </>
      )}

    {step === 5 && (
      <>
        <RiddleFive
        riddleFive={riddleFive}
        onRiddleFiveChange={onRiddleFiveChange}
        onStepChange={onStepChange}
        />
        <ProgressBar step={step} />
      </>
      )}
   
    {step === 6 && (
         <Result
         riddleOne={riddleOne}
         riddleTwo={riddleTwo}
         riddleThree={riddleThree}
         riddleFour={riddleFour}
         riddleFive={riddleFive}
         username={username}
         restartGame={restartGame}
         />
      )}

      
      </div>
    )


}

export default RiddleForm;