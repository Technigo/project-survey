import React from 'react';

// image
import musicIllustration1 from 'assets/images/music file2-07.png';

// components
import ProgressBar from './ProgressBar';
import NextButton from './NextButton';

const LandingPage = ({ step, setStep, section, setSection }) => {
  return (
    <>
      <h2>Welcome to this survey!</h2>
      <ul>
        <li>You will get to answer five questions related to music.</li>
        <li>It will take you a maximum of five minutes to fill out.</li>
        <li>All questions that are required are marked as required.</li>
      </ul>
      <NextButton
        whatQuestionNext="firstQuestion"
        section={section}
        setSection={setSection}
        currentState="Whatever"
        defaultState=""
        message=""
        step={step}
        setStep={setStep}
        whatStepNext="1" />
      <img src={musicIllustration1} alt="illustration" className="illustration" aria-hidden="true" />
      <ProgressBar step={step} />
    </>
  )
}

export default LandingPage;