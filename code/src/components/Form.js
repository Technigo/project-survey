import React, { useState } from 'react';
import Intro from 'components/Intro.js';
import ProductType from 'components/ProductType.js';
import PriceInterval from './PriceInterval.js';
/* import Summary from 'components/Summary.js'; */

const Form = () => {
  const [productChoice, setProductType] = useState('');
  const [step, setStep] = useState(1);
  /*   const [ageGroup, setAgeGroup] = useState([0]); */

  const onProductChoiceSet = (event) => {
    setProductType(event.target.value);
  };

  /*   const onAgeGroupChoiceSet = (event) => {
    setAgeGroup(event.target.value);
  }; */

  const onStepChange = () => {
    setStep(step + 1)
    console.log(step);
  };

  const onStepGoBack = () => {
    setStep(step - 1);
  };

  const goBackToStart = () => {
    setStep(step - 5);
  };

  return (
    <div className="mainContainer">
      {step === 1 && <Intro onStepChange={onStepChange} />}
      {step === 1 && (
        <ProductType
          onStepChange={onStepChange}
          onStepGoBack={onStepGoBack}
          goBackToStart={goBackToStart}
          onProductChoiceSet={onProductChoiceSet}
          productChoice={productChoice} />
      )}
      {step === 3 && (
        <PriceInterval />
      )}
    </div>
  );
};
export default Form;