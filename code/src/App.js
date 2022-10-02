import React, { useState } from 'react';
import './index.css';
import StartPage from 'components/StartPage';
import IntroductionPage from 'components/IntroductionPage';
import Section1 from 'components/Section1';
import Section2 from 'components/Section2';
import Section3 from 'components/Section3';
import ShowSummary from 'components/ShowSummary';
import RegisterationPage from 'components/RegisterationPage';
import LastPage from 'components/LastPage';

const App = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    gender: '',
    status: '',
    reason: '',
    where: '',
    serviceSatisfaction: '',
    // quality: '',
    WebsiteSatisfaction: '',
  });

  // Next step function
  const nextStep = () => {
    setStep(step + 1);
  };

  // Prev step function
  const prevStep = () => {
    setStep(step - 1);
  };

  console.log('Step', step);
  return (
    <>
      <div className="App">
        <h2>Customer Satisfaction Survey</h2>
        {step === 0 && <StartPage onNextStep={nextStep} />}

        {step === 1 && <IntroductionPage onNextStep={nextStep} />}

        {step === 2 && (
          <Section1
            onNextStep={nextStep}
            onPrevStep={prevStep}
            setFormData={setFormData}
            formData={formData}
          />
        )}

        {step === 3 && (
          <Section2
            onNextStep={nextStep}
            onPrevStep={prevStep}
            setFormData={setFormData}
            formData={formData}
          />
        )}
        {step === 4 && (
          <Section3
            onNextStep={nextStep}
            onPrevStep={prevStep}
            setFormData={setFormData}
            formData={formData}
          />
        )}
        {step === 5 && (
          <ShowSummary
            onNextStep={nextStep}
            onPrevStep={prevStep}
            formData={formData}
          />
        )}
        {step === 6 && <RegisterationPage onNextStep={nextStep} />}
        {step === 7 && <LastPage setStep={setStep} />}
      </div>
    </>
  );
};

export default App;
