import React, { useState } from 'react';
import { IntroPage } from 'Components/IntroPage';
import { FirstQuestion } from 'Components/FirstQuestion';
import { SecondQuestion } from 'Components/SecondQuestion';
import { ThirdQuestion } from 'Components/ThirdQuestion';
import { FourthQuestion } from 'Components/FourthQuestion';
import { FifthQuestion } from 'Components/FifthQuestion';
import { SixthQuestion } from 'Components/SixthQuestion';
import { SeventhQuestion } from 'Components/SeventhQuestion';
import { EightQuestion } from 'Components/EightQuestion';
import { NinthQuestion } from 'Components/NinthQuestion';
import { TenthQuestion } from 'Components/TenthQuestion';
import { Result } from 'Components/Result';

export const App = () => {
  const [step, setStep] = useState(0);
  const [adjective, setAdjective] = useState('');
  const [foodNoun, setFoodNoun] = useState('');
  const [ingVerb, setIngVerb] = useState('');
  const [clothingNoun, setClothingNoun] = useState('');
  const [celebrity, setCelebrity] = useState('');
  const [jobSector, setJobSector] = useState('');
  const [happyAdjective, setHappyAdjective] = useState('');
  const [bodyPart, setBodyPart] = useState('');
  const [infinitiveVerb, setInfinitiveVerb] = useState('');
  const [descriptiveAdjective, setDescriptiveAdjective] = useState('');
  const [introPage, setIntroPage] = useState('');

  const handleProgress = () => {
    setStep(step + 1);
  }

  return (
    <div className="survey-container">
      {step === 0 && (
        <IntroPage
          introPage={introPage}
          setIntroPage={setIntroPage} />
      )}
      {step === 1 && (
        <FirstQuestion
          adjective={adjective}
          setAdjective={setAdjective} />
      )}
      {step === 2 && (
        <SecondQuestion
          foodNoun={foodNoun}
          setFoodNoun={setFoodNoun} />
      )}
      {step === 3 && (
        <ThirdQuestion
          ingVerb={ingVerb}
          setIngVerb={setIngVerb} />
      )}
      {step === 4 && (
        <FourthQuestion
          clothingNoun={clothingNoun}
          setClothingNoun={setClothingNoun} />
      )}
      {step === 5 && (
        <FifthQuestion
          celebrity={celebrity}
          setCelebrity={setCelebrity} />
      )}
      {step === 6 && (
        <SixthQuestion
          jobSector={jobSector}
          setJobSector={setJobSector} />
      )}
      {step === 7 && (
        <SeventhQuestion
          happyAdjective={happyAdjective}
          setHappyAdjective={setHappyAdjective} />
      )}
      {step === 8 && (
        <EightQuestion
          bodyPart={bodyPart}
          setBodyPart={setBodyPart} />
      )}
      {step === 9 && (
        <NinthQuestion
          infinitiveVerb={infinitiveVerb}
          setInfinitiveVerb={setInfinitiveVerb} />
      )}
      {step === 10 && (
        <TenthQuestion
          descriptiveAdjective={descriptiveAdjective}
          setDescriptiveAdjective={setDescriptiveAdjective} />
      )}
      {step === 11 && (
        <Result
          introPage={introPage}
          adjective={adjective}
          foodNoun={foodNoun}
          ingVerb={ingVerb}
          clothingNoun={clothingNoun}
          celebrity={celebrity}
          jobSector={jobSector}
          happyAdjective={happyAdjective}
          bodyPart={bodyPart}
          infinitiveVerb={infinitiveVerb}
          descriptiveAdjective={descriptiveAdjective} />
      )}
      {step < 11 && (
        <>
          <p className="counterText"> Questions answered: {step}/10 </p>
          <button className="button" type="button" onClick={handleProgress}>Next</button>
        </>
      )}
    </div>
  )
}