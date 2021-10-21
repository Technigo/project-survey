import React from 'react';
import { useState } from 'react';

import EventTypeQuestion from './EventTypeQuestion';
import MusicStyleQuestion from './MusicStyleQuestion';
import DateQuestion from './DateQuestion';
import NameQuestion from './NameQuestion';
import EmailQuestion from './EmailQuestion';
import Summary from './Summary';

const Form = () => {
  const [eventInput, setEventInput] = useState('Wedding/Anniversary');
  const [musicInput, setMusicInput] = useState('Pop');
  const [dateInput, setDateInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [step, setStep] = useState(1);

  const onEventInputChange = (event) => {
    setEventInput(event.target.value);
  };

  const onMusicStyleChange = (event) => {
    setMusicInput(event.target.value);
  };

  const onDateInputChange = (event) => {
    setDateInput(event.target.value);
  };

  const onNameInputChange = (event) => {
    setNameInput(event.target.value);
  };

  const onEmailInputChange = (event) => {
    setEmailInput(event.target.value);
  };

  const onStepChange = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && (
        <EventTypeQuestion
          eventInput={eventInput}
          onEventInputChange={onEventInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 2 && (
        <MusicStyleQuestion
          eventInput={musicInput}
          onEventInputChange={onMusicStyleChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 3 && (
        <DateQuestion
          dateInput={dateInput}
          onDateInputChange={onDateInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 4 && (
        <NameQuestion
          nameInput={nameInput}
          onNameInputChange={onNameInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 5 && (
        <EmailQuestion
          emailInput={emailInput}
          onEmailInputChange={onEmailInputChange}
          onStepChange={onStepChange}
        />
      )}
      {step === 6 && (
        <Summary
          dateInput={dateInput}
          nameInput={nameInput}
          emailInput={emailInput}
        />
      )}
    </div>
  );
};

export default Form;
