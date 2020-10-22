import React, { useState } from 'react';

import Intro from './Intro';
import DropDown from './DropDown';
import RadioButtons from './RadioButtons';
import InputText from './InputText';
import Submit from './Submit';
import Summary from './Summary';

const Form = () => {
  const [week, setWeek] = useState('');
  const [rating, setRating] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleWeekChange = event => {
    setWeek(event.target.value);
  };

  const handleRatingChange = event => {
    setRating(event.target.value);
  };

  const handleFeedbackChange = event => {
    setFeedback(event.target.value);
  };

  console.log(week, rating, feedback);

  return (
    <form>
      <Intro />
      <DropDown week={week} onWeekChange={handleWeekChange} />
      <RadioButtons rating={rating} onRatingChange={handleRatingChange} />
      <InputText feedback={feedback} onFeedbackChange={handleFeedbackChange} rating={rating} />
    </form>
  )
}

export default Form;