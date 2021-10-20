import React from 'react';

const FirstQuestion = ({ bandChoice, onBandChoiceChange, onStepChange }) => {
  return (
    <form>
      <button id="Rammstein" value={bandChoice} onClick={onBandChoiceChange}></button>
      <button id="Håkan Hellström" value={bandChoice} onClick={onBandChoiceChange}></button>
      <button id="Coldplay" value={bandChoice} onClick={onBandChoiceChange}></button>
      <button id="Depeche Mode" value={bandChoice} onClick={onBandChoiceChange}></button>
      <button onClick={onBandChoiceChange}>Next Question</button>
    </form>
  );
};

export default FirstQuestion;