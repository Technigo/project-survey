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
  
  const [showStart, setShowStart] = useState(true);
  const [username, setUsername] = useState("");
  const [step, setStep] = useState(0);
  const [questOne, setQuestOne] = useState('');
  const [questTwo, setQuestTwo] = useState('');
  const [questThree, setQuestThree] = useState('');
  const [questFour, setQuestFour] = useState('');
  const [questFive, setQuestFive] = useState('');

  const onStepChange = () => {
    setStep(step + 1)
  }

  const onQuestOneChange = (event) => {
    setQuestOne(event.target.value)
  }

  const onQuestTwoChange = (event) => {
    setQuestTwo(event.target.value)
  }

  const onQuestThreeChange = (event) => {
    setQuestThree(event.target.value)
  }

  const onQuestFourChange = (event) => {
    setQuestFour(event.target.value)
  }

  const onQuestFiveChange = (event) => {
    setQuestFive(event.target.value)
  }

  const restartGame = () => {
    setShowStart(true);
    setUsername("");
    setStep(0)
  };
    
    return (
      <div>
        
      {step === 0 && (
        <Start
          showStart={showStart}
          setShowStart={setShowStart}
          username={username}
          setUsername={setUsername}
          onStepChange={onStepChange}
        />
      )}

      {step === 1 && (
       <>
        <QuestionOne
          questOne={questOne}
          onQuestOneCange={onQuestOneChange}
          onStepChange={onStepChange}
        />
        <Progressbar step={step} />
        </>
      )}

      {step === 2 && (
        <>
        <QuestionTwo
          questTwo={questTwo}
          onQuestTwoChange={onQuestTwoChange}
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
        onQuestFiveChange={onQuestFiveChange}
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
