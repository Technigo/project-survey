import React from 'react';
import HeavyMetal from './HeavyMetal';
import Pop from './Pop';
import Rock from './Rock';
import Rap from './Rap';
import Songwriter from './Songwriter';
import Electric from './Electric';

const ThirdQuestion = ({ bandChoice, onBandChoiceSet, genreChoice, onStepChange }) => {
  if (genreChoice === 'Heavy Metal') {
    return (
      <>
        <HeavyMetal
          genreChoice={genreChoice}
          bandChoice={bandChoice}
          onBandChoiceSet={onBandChoiceSet}
        />
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </>
    );
  } else if (genreChoice === 'Pop') {
    return (
      <>
        <Pop genreChoice={genreChoice} bandChoice={bandChoice} onBandChoiceSet={onBandChoiceSet} />
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </>
    );
  } else if (genreChoice === 'Rock') {
    return (
      <>
        <Rock genreChoice={genreChoice} bandChoice={bandChoice} onBandChoiceSet={onBandChoiceSet} />
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </>
    );
  } else if (genreChoice === 'Rap & RNB') {
    return (
      <>
        <Rap genreChoice={genreChoice} bandChoice={bandChoice} onBandChoiceSet={onBandChoiceSet} />
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </>
    );
  } else if (genreChoice === 'Singer/Songwriter') {
    return (
      <>
        <Songwriter
          genreChoice={genreChoice}
          bandChoice={bandChoice}
          onBandChoiceSet={onBandChoiceSet}
        />
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </>
    );
  } else if (genreChoice === 'Electronic dance music') {
    return (
      <>
        <Electric
          genreChoice={genreChoice}
          bandChoice={bandChoice}
          onBandChoiceSet={onBandChoiceSet}
        />
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </>
    );
  }
};

export default ThirdQuestion;
