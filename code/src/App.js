import React, { useState } from 'react';
import swal from '@sweetalert/with-react'
import { Front } from 'components/Front';
import { QuestionOne } from 'components/QuestionOne';
import { QuestionTwo } from 'components/QuestionTwo';
import QuestionThree from 'components/QuestionThree';
import { Result } from 'components/Result'


export const App = () => {
  const[step, setStep] = useState(1)
  const[greeting, setgreeting]=useState()                          //setting the state  of counter
  const[questionOne, setquestionOne]=useState('')              //set the user state for an epty string
  const[answerTwoOption, setanswerTwoOption]=useState('')
  const[answerThreeOption, setanswerThreeOption]=useState('') 
  const[questionFour, setquestionFour]=useState('') 
  const[errorMessage, setErrorMessage] = useState('')
 

  const handleStepDecrease = () => {                     //counter decrease
    setStep(step -1);
  }

  const handleStepIncrease = (event) => {                       //counter increase
    if((step === 2 && questionOne === '') || (step === 3 && answerTwoOption === '') || (step === 4 && answerThreeOption === ''))
    {
        console.log('here')
        setErrorMessage('Please provide your input')
    }
    else {
      setErrorMessage('')
      console.log('here 1')
      setStep(step + 1)
    }
    event.preventDefault();
  }
 


  return (
    <div className='mainContainer'>
      {step === 1 &&(
        <Front value ={greeting} setGreeting={setgreeting} step={step}/>
      )}
      {step === 2 &&(
        <QuestionOne value ={questionOne} setquestionOne={setquestionOne}/>
      )}
      {step === 3 &&(
        <QuestionTwo value ={answerTwoOption} setanswerTwoOption={setanswerTwoOption}/>
      )}
      {step === 4 &&(
        <QuestionThree value={answerThreeOption} setanswerThreeOption={setanswerThreeOption}/>
      )}
       {step > 4 &&(
        <>
        <div className='insights text-2xl p-8 m-8'>Insights:</div>
        <Result questionOne = {questionOne} questionTwo={answerTwoOption} questionThree={answerThreeOption}  greeting={greeting}/>
        </>
      )}
      { (step === 1 || step <= 4) &&(
        <>
        <div className='buttons inline-flex'>
        <button className='button border-double border-4 border-sky-500 hover:border-dotted' onClick={handleStepDecrease}> Previous question</button>
        <button className='button border-double border-4 border-sky-500 hover:border-dotted' onClick={(event) => handleStepIncrease(event)}> Next question</button>
        </div>
        {errorMessage !== '' && (<h3 className='text-red-500'>{errorMessage}</h3>)}
        <h1 className='counter m-6'>You are at question : {step}</h1>
        </>
        )}
        
           

         
      
       
         </div>
    
  );
}