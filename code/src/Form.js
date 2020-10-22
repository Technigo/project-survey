import React, { useState } from 'react';

import Intro from './Intro';
import DropDown from './DropDown';
import RadioButtons from './RadioButtons';
import InputText from './InputText';
import Submit from './Submit';
import Summary from './Summary';

const Form = () => {
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleLocationChange = event => {
    setLocation(event.target.value);
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
  }

  console.log(location, rating, feedback, showSummary);

  return (
    <section>
      {!showSummary ? (
        <form>
          <Intro />
          <DropDown location={location} onLocationChange={handleLocationChange} />
          <RadioButtons rating={rating} onRatingChange={handleRatingChange} />
          <InputText feedback={feedback} onFeedbackChange={handleFeedbackChange} rating={rating} />
          <Submit onClick={handleSubmit} />

        </form>
      ) : (
          <Summary location={location} rating={rating} feedback={feedback} />
        )}
    </section>
  )
}

export default Form;