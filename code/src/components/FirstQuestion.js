import React, { useState } from 'react';
import { SecondQuestion } from './SecondQuestion';
import 'components-css/questions-container.css';

const destinationOptions = ["City", "Beach", "Forest"];

export const FirstQuestion = () => {
  const [destinationOption, setDestinationOption] = useState();
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    if(destinationOption) {
      return () => setVisible(true);
    }
  };

  return (
    <section className="questions-container" id="first-question">
      <form className="first-question" onSubmit={(event) => event.preventDefault()}>
        <div className="radio-buttons-text" role="radiogroup" tabIndex="0" aria-label="Pick a Destination: City, Beach or Forest">
          <p>Pick a destination:</p>
          {destinationOptions.map((destination) => (
            <label key={destination} aria-label={destination}>
              <input
                name="color-options"
                type="radio"
                value={destination}
                onChange={(event) => setDestinationOption(event.target.value)}
                checked={destinationOption === destination} 
                required />
              {destination}
            </label>
          ))}
          <button className="first-button" onClick={checkInput()}>NEXT</button>
        </div>
        <img className="first-question-img" src="assets/question1-img.png" alt=""/>
      </form>
      {(visible === true) && <SecondQuestion chosenDestination={destinationOption}/>}
    </section>
  );
};

/* All three questions are being generated inside <section> with class "questions-container".
They are 3 separate form elements */