import React, { useState } from 'react';

import StartingPage from './StartingPage';
import NameQ from './NameQ';
import ContentQ from './ContentQ';
import RecurrenceQ from './RecurrenceQ';
import EmailQ from './EmailQ';
import Summary from './Summary';

const Form = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [recurrence, setRecurrence] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(0);

  const OnNameInputChange = (event) => {
    setName(event.target.value)
  }
  const OnContentInputChange = (event) => {
    setContent(event.target.value)
  }
  const OnRecurrenceInputChange = (event) => {
    setRecurrence(event.target.value)
  }
  const OnEmailInputChange = (event) => {
    setEmail(event.target.value)
  }
  // Next/submit buttons
  const nextQ = () => {
    setStep(step + 1)
  }

  return (
    <div className="form-wrapper">
      {step === 0
      && <StartingPage
        nextQ={nextQ} />}
      {step === 1
      && <NameQ
        name={name}
        OnNameInputChange={OnNameInputChange}
        nextQ={nextQ} />}
      {step === 2
        && <ContentQ
          content={content}
          OnContentInputChange={OnContentInputChange}
          nextQ={nextQ} />}
      {step === 3
        && <RecurrenceQ
          recurrence={recurrence}
          OnRecurrenceInputChange={OnRecurrenceInputChange}
          nextQ={nextQ} />}
      {step === 4
        && <EmailQ
          email={email}
          OnEmailInputChange={OnEmailInputChange}
          nextQ={nextQ} />}
      {step === 5
        && <Summary
          name={name}
          content={content}
          recurrence={recurrence}
          email={email} />}
    </div>
  )
}

export default Form