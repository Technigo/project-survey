/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Books } from 'components/Books';
import { Result } from 'components/Result';
import { Language } from 'components/Language';
import { Version } from 'components/Version';
import { Header } from 'components/Header';

export const App = () => {
  const [step, setStep] = useState(1);
  const [book, setBooks] = useState(false);
  const [language, setLanguage] = useState('');
  const [version, setVersion] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1);
  }
  return (
    <>
      <Header />
      {step === 1 && (
        <Books book={book} setBooks={setBooks} />
      )}
      {step === 2 && (
        <Language language={language} setLanguage={setLanguage} />
      )}
      {step === 3 && (
        <Version version={version} setVersion={setVersion} />
      )}
      {step >= 4 && (
        <Result book={book} language={language} version={version} />
      )}
      {step < 4 && (

        <>
          <p>Current step: {step}</p>
          <button type="button" onClick={handleStepIncrease}>Next step</button>
        </>
      )}
    </>
  );
}
