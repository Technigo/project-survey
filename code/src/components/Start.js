import React from 'react';
import Button from './Button';
import './start.css';

import { ReactComponent as Clock } from '../icons/clock.svg';

const Start = ({ onStepChange }) => {
  return (
    <div className="start">
      <h2> What do you think of our app?</h2>
      <p>Please help us improve by completing this short survey</p>
      <div className="start-button">
        <Button
          buttonType="button"
          buttonText="Start"
          whenClicked={onStepChange}
        />
        <p>
          press <span>Enter</span> &#x21b5;
        </p>
      </div>
      <div className="time">
        <p>
          <Clock />
          Takes 2 min
        </p>
      </div>
    </div>
  );
};

export default Start;
