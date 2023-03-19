/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable max-len */
import React, { useState } from 'react';
import Name from './Name';
import Food from './Food';
import Result from './Result';
import ProgressBar from './ProgressBar';
import RadioProduct from './RadioProduct';
import Suggestion from './Suggestion';
import Satisfaction from './Satisfaction';
import ThankYouImage from '../images/thankyou.png'

const allRange = ['It sucks', 'It is aiiight ', 'It is okay', 'it works niiiicely', 'Superb /chefs kiss']

const Survey = () => {
  const [step, setStep] = useState(1);
  const [percent, setPercent] = useState(0);
  const [name, setName] = useState('');
  const [favProduct, setFavProduct] = useState('');
  const [satisfactionRange, setSatisfactionRange] = useState('')
  const [satisfaction, setSatisfaction] = useState(allRange[satisfactionRange])
  const [suggestion, setSuggestion] = useState('');
  const [food, setFood] = useState('');
  // const [result, setResult] = useState('');

  const handleStepIncrease = () => {
    if (name.length > 0) {
      setStep(step + 1);
      setPercent(percent + 20);
    } else {
      alert('Enter your name babe 💗')
    }
  }

  const handleSatisfactionChange = (event) => {
    setSatisfactionRange(event.target.value)
    setSatisfaction(allRange[event.target.value])
  }

  // constHandleClick = () => {
  //   setPercent(percent + 10)
  // }
  return (
    <>
      {step === 1 && (
        <Name
          name={name}
          setName={setName}
          counter={step}
          setCounter={setStep}
          percentboop={percent}
          setPercentbop={setPercent} />
      )}
      {step === 2 && (
        <Food
          food={food}
          setFood={setFood}
          avocado={step}
          setAvocado={setStep}
          percentboop={percent}
          setPercentbop={setPercent} />
      )}
      {step === 3 && (
        <RadioProduct favProduct={favProduct} setFavProduct={setFavProduct} />
      )}
      {step === 4 && (
        <Suggestion suggestion={suggestion} setSuggestion={setSuggestion} />
      )}
      {step === 5 && (
        <Satisfaction satisfaction={satisfaction} setSatisfaction={setSatisfaction} satisfactionRange={satisfactionRange} handleSatisfactionChange={handleSatisfactionChange} />
      )}
      {step === 6 && (
        <Result name={name} food={food} favProduct={favProduct} />
      )}

      {step < 7 && (
        <>
          <p>Step: {step}/6</p>
          <button type="button" onClick={handleStepIncrease}>Next question</button>
          <ProgressBar percent={percent} />
        </>
      )}
      {step > 6 && (
        <a href="https://ultranostalgia-survey.netlify.app/"> <img className="finalImage" src={ThankYouImage} alt="thank you"/> </a>
      )}
    </>
  );
}

export default Survey;