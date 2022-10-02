import React, { useState } from 'react';
import Intro from './Intro.js';
import ProductType from './ProductType.js';
import PriceQuestionOne from './PriceQuestionOne';
import PriceQuestionTwo from './PriceQuestionTwo';
import PriceQuestionThree from './PriceQuestionThree';
import Summary from './Summary';

const Form = () => {
  const [step, setStep] = useState(1);
  const [ageGroup, setAgeGroup] = useState('');
  const [gender, setGender] = useState('');
  const [productType, setProductType] = useState('');
  const [price1, setPrice1] = useState('');
  const [price2, setPrice2] = useState('');
  const [price3, setPrice3] = useState('');

  const onProductChoiceSet = (event) => {
    setProductType(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1)
    console.log(step);
  };

  const onStepGoBack = () => {
    setStep(step - 1);
  };

  const goBackToStart = () => {
    setStep(step - 6);
  };

  return (

    <div className="mainContainer">
      {step === 1 && <Intro
        onStepChange={onStepChange}
        step={step}
        gender={gender}
        setGender={setGender}
        ageGroup={ageGroup}
        setAgeGroup={setAgeGroup} />}
      {step === 2 && (
        <ProductType
          onStepChange={onStepChange}
          onStepGoBack={onStepGoBack}
          goBackToStart={goBackToStart}
          onProductChoiceSet={onProductChoiceSet}
          setProductType={setProductType}
          productType={productType}
          step={step} />
      )}
      {step === 3 && (
        <PriceQuestionOne
          price1={price1}
          setPrice1={setPrice1}
          step={step} />
      )}
      {step === 4 && (
        <PriceQuestionTwo price2={price2} setPrice2={setPrice2} step={step} />
      )}
      {step === 5 && (
        <PriceQuestionThree price3={price3} setPrice3={setPrice3} step={step} />
      )}
      {step === 6 && (
        <PriceQuestionThree price3={price3} setPrice3={setPrice3} step={step} />
      )}
      {step === 7 && (
        <Summary
          productType={productType}
          ageGroup={ageGroup}
          setAgeGroup={setAgeGroup}
          gender={gender}
          price1={price1}
          price2={price2}
          price3={price3}
          goBackToStart={goBackToStart}
          onStepGoBack={onStepGoBack}
          step={step} />
      )}
      <div className="buttons">
        {step > 1 && step < 7 && (
          <div>
            <button className="back-button" type="button" onClick={onStepGoBack}>Go back</button>
          </div>
        )}
        {step < 6 && step > 1 && (
          <div>
            <button className="continue-button" type="button" onClick={onStepChange}>Continue</button>
          </div>
        )}

        {step === 6 && (
          <div>
            <button className="continue-button submit" type="button" onClick={onStepChange}>Submit</button>
          </div>
        )}
        {step === 7 && (
          <div>
            <button className="continue-button backToStart" type="button" onClick={goBackToStart}>Back To Start</button>
          </div>
        )}
      </div>
    </div>

  );
}

export default Form;
