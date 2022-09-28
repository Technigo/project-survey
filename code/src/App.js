import React, { useState } from 'react';
import './index.css';
import IntroductionPage from 'components/IntroductionPage';
import Section1 from 'components/Section1';
import Section2 from 'components/Section2';
import Section3 from 'components/Section3';
import ShowSummary from 'components/ShowSummary';

const App = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState([]);
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  console.log('hej ', step);
  return (
    <>
      <div className="App">
        <h2>Customer Satisfaction Survey</h2>

        {step === 1 && <IntroductionPage onNextStep={nextStep} />}
        {step === 2 && (
          <Section1 onNextStep={nextStep} onPrevStep={prevStep} />
        )}
        {step === 3 && (
          <Section2 onNextStep={nextStep} onPrevStep={prevStep} />
        )}
        {step === 4 && (
          <Section3 onNextStep={nextStep} onPrevStep={prevStep} />
        )}
        {step === 5 && <ShowSummary onPrevStep={prevStep} />}
      </div>
    </>
  );
};

export default App;
