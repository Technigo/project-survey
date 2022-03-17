import React, { useState } from 'react'
import { QuestionOne } from './components/QuestionOne'
import { QuestionTwo } from './components/QuestionTwo'
import { QuestionThree } from './components/QuestionThree'
import { QuestionFour } from './components/QuestionFour'
import { QuestionFive } from './components/QuestionFive'
import { Summary } from './components/Summary'

export const App = () => {
const [step, setStep] = useState(1)
const [quality, setQuality] = useState('');
const [personality, setPersonality] = useState("");
const [experience, setExperience] = useState("");
const [motherhood, setMotherhood] = useState(false);
const [age, setAge] = useState();  


if (step === 1) {
  return (
    <QuestionOne 
    quality={quality}
    setQuality={setQuality}
    step={step}
    setStep={setStep} />
  );

} else if (step === 2 ) {
  return (
  <QuestionTwo
   personality={personality}
   setPersonality={setPersonality}
   step={step}
   setStep={setStep}/>
  );

} else if (step === 3 ) {
  return (
    <QuestionThree 
    experience={experience}
    setExperience={setExperience}
    step={step}
    setStep={setStep}/>
  );

} else if (step === 4 ) {
  return (
    <QuestionFour
    motherhood={motherhood}
    setMotherhood={setMotherhood}
    step={step}
    setStep={setStep} />
  )
} else if (step === 5 ) {
  return (
    <QuestionFive
    age={age}
    setAge={setAge}
    step={step}
    setStep={setStep} />
  )
} else if (step === 6) {
  return (
  <Summary 
  quality={quality}
  personality={personality}
  experience={experience}
  motherhood={motherhood}
  />
  )
}



}
  


