import React, { useState } from 'react';
import { QuestionOne } from 'components/QuestionOne';
import { QuestionTwo } from 'components/QuestionTwo';
import { Result } from 'components/Result'

export const App = () => {
  const[step, setStep] = useState(1);                           //setting the state  of counter
  const[questionOne, setquestionOne]=useState('')              //set the user state for an epty string
  const[answerTwoOption, setanswerTwoOption]=useState()
  const[questionThree, setquestionThree]=useState('') 
  const[questionFour, setquestionFour]=useState('') 
  const[questionFive, setquestionFive]=useState('')
 

  const handleStepDecrease = () => {                     //counter decrease
    setStep(step-1);
  }

  const handleStepIncrease = () => {                       //counter increase
    setStep(step + 1);
  }
 


  return (
    <>
      <h1 className='headline m-8 p-8 text-4xl underline underline-offset-8'>Do you know yourself questionaire </h1>
      

      {step === 1 && (
        <QuestionOne value ={questionOne} setquestionOne={setquestionOne}/>
      )}
      {step === 2 &&(
        <QuestionTwo value ={answerTwoOption} setanswerTwoOption={setanswerTwoOption}/>
      )}
        <div className='buttons inline-flex overflow-x-auto '>
          <button className='button m-5' onClick={handleStepIncrease}> Next question</button>
          <button className='button m-5' onClick={handleStepDecrease}> Previous question</button>
        </div>
        
        <h1 className='counter m-6'>You are at question : {step}</h1>
        {step < 3 && (
        <>
          

         </>
      )}
        <Result questionOne = {questionOne} questionTwo={answerTwoOption} />
    </>
    
  );
}