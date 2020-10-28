import React, { useState } from 'react';

import Intro from './Intro';
import Button from './Button';
import DropDown from './DropDown';
import RadioButtons from './RadioButtons';
import InputText from './InputText';
import Summary from './Summary';

const Form = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [place, setPlace] = useState('');
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleStart = event => {
    event.preventDefault();
    setShowQuestion(true);
  }

  const handlePlaceChange = event => {
    setPlace(event.target.value);
  };

  const handleRatingChange = event => {
    setRating(event.target.value);
  };

  const handleFeedbackChange = event => {
    setFeedback(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  };

  return (
    <section>
      {showSummary
        ? <Summary place={place} rating={rating} feedback={feedback} />
        : <form>
          <Intro />
          {!showQuestion && <Button onClick={handleStart} title="Start" />}
          {showQuestion && <DropDown place={place} onPlaceChange={handlePlaceChange} />}
          {place && <RadioButtons rating={rating} onRatingChange={handleRatingChange} />}
          {rating && <InputText feedback={feedback} onFeedbackChange={handleFeedbackChange} rating={rating} />}
          {feedback && <Button onClick={handleSubmit} title="Submit" />}
        </form>
      }
    </section>
  )
}

export default Form;