import React from 'react';
import HeavyMetal from './HeavyMetal';
import Pop from './Pop';
import Rock from './Rock';
import Rap from './Rap';
import Songwriter from './Songwriter';
import Electric from './Electric';

const ThirdQuestion = ({ bandChoice, onBandChoiceSet, genreChoice, onStepChange, onStepGoBack }) => {
  if (genreChoice === 'Heavy Metal') {
    return (
      <form  className="formContainer">
        <HeavyMetal
          genreChoice={genreChoice}
          bandChoice={bandChoice}
          onBandChoiceSet={onBandChoiceSet}
        />
        <div className="buttonContainer">
        <button className="button" onClick={onStepGoBack}>
          Previous question
        </button>
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </div>
      </form>
    );
  } else if (genreChoice === 'Pop') {
    return (
      <form  className="formContainer">
        <Pop genreChoice={genreChoice} bandChoice={bandChoice} onBandChoiceSet={onBandChoiceSet} />

        <div className="buttonContainer">
        <button className="button" onClick={onStepGoBack}>
          Previous question
        </button>
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </div>
      </form>
    );
  } else if (genreChoice === 'Rock') {
    return (
      <form  className="formContainer">
        <Rock genreChoice={genreChoice} bandChoice={bandChoice} onBandChoiceSet={onBandChoiceSet} />
        <div className="buttonContainer">
        <button className="button" onClick={onStepGoBack}>
          Previous question
        </button>
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </div>
      </form>
    );
  } else if (genreChoice === 'Rap & RNB') {
    return (
      <form  className="formContainer">
        <Rap genreChoice={genreChoice} bandChoice={bandChoice} onBandChoiceSet={onBandChoiceSet} />
        <div className="buttonContainer">
        <button className="button" onClick={onStepGoBack}>
          Previous question
        </button>
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </div>
      </form>
    );
  } else if (genreChoice === 'Singer/Songwriter') {
    return (
      <form  className="formContainer">
        <Songwriter
          genreChoice={genreChoice}
          bandChoice={bandChoice}
          onBandChoiceSet={onBandChoiceSet}
        />
        <div className="buttonContainer">
        <button className="button" onClick={onStepGoBack}>
          Previous question
        </button>
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </div>
      </form>
    );
  } else if (genreChoice === 'Electronic dance music') {
    return (
      <form  className="formContainer">
        <Electric
          genreChoice={genreChoice}
          bandChoice={bandChoice}
          onBandChoiceSet={onBandChoiceSet}
        />
        <div className="buttonContainer">
        <button className="button" onClick={onStepGoBack}>
          Previous question
        </button>
        <button className="button" onClick={onStepChange}>
          Next Question
        </button>
      </div>
      </form>
    );
  }
};

export default ThirdQuestion;
