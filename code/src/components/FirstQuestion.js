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
    <section className="questions-container">
      <form onSubmit={(event) => event.preventDefault()} id="first-question">
        <div role="radiogroup" tabIndex="0" aria-label="Pick a Destination: City, Beach or Forest">
          Pick a destination:
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
          <button onClick={checkInput()}>1 of 3</button>
        </div>
      </form>
      {(visible === true) && <SecondQuestion chosenDestination={destinationOption}/>}
    </section>
  );
};

/* All three questions are being generated inside <section> with class "questions-container".
They are 3 separate form elements */