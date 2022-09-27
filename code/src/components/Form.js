import React, { useState } from 'react';

import Intro from 'components/Intro.js';
import ProductType from 'components/ProductType.js';
/* import Summary from 'components/Summary.js'; */

const Form = () => {
  const [productChoice, setProductType] = useState('');
  /*   const [bandChoice, setBandChoice] = useState('');
  const [arenaChoice, setArenaChoice] = useState('');
  const [seatChoice, setSeatChoice] = useState('');
  const [tickets, setTickets] = useState('');
  */
  const [step, setStep] = useState(1);

  /*  const onBandChoiceSet = (event) => {
    setBandChoice(event.target.value);
  };

  const onArenaChoiceSet = (event) => {
    setArenaChoice(event.target.value);
  };

  const onSeatChoiceSet = (event) => {
    setSeatChoice(event.target.value);
  };

  const onAmountChoiceSet = (event) => {
    setTickets(event.target.value);
  }; */

  const onProductChoiceSet = (event) => {
    setProductType(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
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
      {step === 2 && (
        <ProductType
          onStepChange={onStepChange}
          onStepGoBack={onStepGoBack}
          goBackToStart={goBackToStart}
          onProductChoiceSet={onProductChoiceSet}
          productChoice={productChoice} />
      )}
      {/* {step === 3 && (
        <SecondQuestion
          genreChoice={genreChoice}
          onGenreChoiceSet={onGenreChoiceSet}
          onStepChange={onStepChange}
          onStepGoBack={onStepGoBack}
        />
      )}
      {step === 4 && (
        <ThirdQuestion
          bandChoice={bandChoice}
          onBandChoiceSet={onBandChoiceSet}
          onStepChange={onStepChange}
          onStepGoBack={onStepGoBack}
          genreChoice={genreChoice}
        />
      )}
      {step === 5 && (
        <FourthQuestion
          seatChoice={seatChoice}
          onSeatChoiceSet={onSeatChoiceSet}
          onStepChange={onStepChange}
          onStepGoBack={onStepGoBack}
        />
      )}
      {step === 6 && (
        <Overview
          arenaChoice={arenaChoice}
          bandChoice={bandChoice}
          seatChoice={seatChoice}
          genreChoice={genreChoice}
          onStepGoBack={onStepGoBack}
          tickets={tickets}
          goBackToStart={goBackToStart}
        />
      )} */}
    </div>
  );
};

export default Form;