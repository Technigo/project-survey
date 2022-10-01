import React, { useState } from "react";
import Start from './Start'
import QuestionOne from './QuestionOne'
import QuestionTwo from './QuestionTwo'
import QuestionThree from './QuestionThree'
import QuestionFour from './QuestionFour'
import QuestionFive from './QuestionFive'
import Result from './Result'
import Progressbar from './Progressbar'

const QuestionsForm = () => {
  
  const [username, setUsername] = useState('');
  const [step, setStep] = useState(0);
  const [questOne, setQuestOne] = useState('');
  const [questTwo, setQuestTwo] = useState('');
  const [questThree, setQuestThree] = useState('');
  const [questFour, setQuestFour] = useState('');
  const [questFive, setQuestFive] = useState('');

  const onStepChange = () => {
    if (username.length > 0)
    setStep(step + 1)
    else (
      alert('Please enter a username 🙃')
    )
  }

  const onQuestThreeChange = (event) => {
    setQuestThree(event.target.value)
  }

  const onQuestFourChange = (event) => {
    setQuestFour(event.target.value)
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
        <QuestionOne
          questOne={questOne}
          setQuestOne={setQuestOne}
          onStepChange={onStepChange}
        />
        <Progressbar step={step} />
        </>
      )}

      {step === 2 && (
        <>
        <QuestionTwo
          questTwo={questTwo}
          setQuestTwo={setQuestTwo}
          onStepChange={onStepChange}
        />
        <Progressbar step={step} />
        </>
      )}

      {step === 3 && (
        <>
         <QuestionThree
          questThree={questThree}
          onQuestThreeChange={onQuestThreeChange}
          onStepChange={onStepChange}
         />
         <Progressbar step={step} />
         </>
      )}
    
    {step === 4 && (
      <>
        <QuestionFour
          questFour={questFour}
          onQuestFourChange={onQuestFourChange}
          onStepChange={onStepChange}
        />
        <Progressbar step={step} />
      </>
      )}

    {step === 5 && (
      <>
        <QuestionFive
        questFive={questFive}
        setQuestFive={setQuestFive}
        onStepChange={onStepChange}
        />
        <Progressbar step={step} />
      </>
      )}
   
    {step === 6 && (
         <Result
         questOne={questOne}
         questTwo={questTwo}
         questThree={questThree}
         questFour={questFour}
         questFive={questFive}
         username={username}
         restartGame={restartGame}
         />
      )}

      
      </div>
    )


}

export default QuestionsForm;
