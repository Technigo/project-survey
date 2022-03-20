import React, { useState } from 'react';

import WelcomePage from 'components/WelcomePage/WelcomePage';
import Question1 from './Question1/Question1';
import Question2 from './Question2/Question2';
import Question3 from './Question3/Question3';
import Summary from './Summary';
import StartButton from 'components/StartButton';
import NextButton from 'components/NextButton';
import ResetButton from './ResetButton';

const Form = () => {
  const [displayPage, setDisplayPage] = useState(0);
  const [username, setUsername] = useState('');
  const [lostItem, setLostItem] = useState('');
  const [lastTime, setLastTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleStartButtonClick = () => {
    setDisplayPage(displayPage + 1);
  };

  const handleNextButtonClick = () => {
    setDisplayPage(displayPage + 1);
  };

  const handleResetButtonClick = () => {
    setDisplayPage(0);
    setUsername('');
    setLostItem('');
    setLastTime('');
  };

  const pageOne = <WelcomePage />;
  const pageTwo = <Question1 username={username} setUsername={setUsername} />;
  const pageThree = <Question2 username={username} lostItem={lostItem} setLostItem={setLostItem} />;
  const pageFour = <Question3 username={username} lostItem={lostItem} lastTime={lastTime} setLastTime={setLastTime} />;
  const pageFive = <Summary username={username} lostItem={lostItem} lastTime={lastTime} />;

  const pageToDisplay = (page) => {
    switch (page) {
      case 0:
        return pageOne;
      case 1:
        return pageTwo;
      case 2:
        return pageThree;
      case 3:
        return pageFour;
      case 4:
        return pageFive;
      default:
        return pageOne;
    };
  };

  const startButton = <StartButton onClick={handleStartButtonClick} />;
  const nextButton = <NextButton displayPage={displayPage} onClick={handleNextButtonClick} />;
  const resetButton = <ResetButton onClick={handleResetButtonClick} />;

  const buttonsToDisplay = (page) => {
    switch (page) {
      case 0:
        return startButton;
      case 1:
        return nextButton;
      case 2:
        return nextButton;
      case 3:
        return nextButton;
      case 4:
        return resetButton;
      default:
        return null; //return something else?
    };
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      {pageToDisplay(displayPage)}
      <br />
      {buttonsToDisplay(displayPage)}
    </form>
  );
};

export default Form;