import React, { useState } from 'react';

import Intro from './Intro';
import Start from './Start';
import DropDown from './DropDown';
import RadioButtons from './RadioButtons';
import InputText from './InputText';
import Submit from './Submit';
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
  }

  console.log(showQuestion, place, rating, feedback, showSummary);
  // console.log(place, rating, feedback, showSummary);

  return (
    <section>
      { (!showSummary && feedback !== '') ? (
        <form>
          <Intro />
          <DropDown place={place} onPlaceChange={handlePlaceChange} />
          <RadioButtons rating={rating} onRatingChange={handleRatingChange} />
          <InputText feedback={feedback} onFeedbackChange={handleFeedbackChange} rating={rating} />
          <Submit onClick={handleSubmit} />
        </form>
      ) : (!showSummary && rating !== '') ? (
        <form>
          <Intro />
          <DropDown place={place} onPlaceChange={handlePlaceChange} />
          <RadioButtons rating={rating} onRatingChange={handleRatingChange} />
          <InputText feedback={feedback} onFeedbackChange={handleFeedbackChange} rating={rating} />
        </form>
      ) : (!showSummary && place !== '') ? (
        <form>
          <Intro />
          <DropDown place={place} onPlaceChange={handlePlaceChange} />
          <RadioButtons rating={rating} onRatingChange={handleRatingChange} />
        </form>
      ) : (!showSummary && showQuestion) ? (
        <form>
          <Intro />
          <DropDown place={place} onPlaceChange={handlePlaceChange} />
        </form>
      ) : (!showSummary && !showQuestion) ? (
        <form>
          <Intro />
          <Start onClick={handleStart} />
        </form>
      ) : (
                  <Summary place={place} rating={rating} feedback={feedback} />
                )}
    </section>
  )
}

export default Form;