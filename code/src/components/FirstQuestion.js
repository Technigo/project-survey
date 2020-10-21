import React, { useState } from 'react';
import { SecondQuestion } from './SecondQuestion';
import 'components-css/questions-container.css';

const destinationOptions = ['City', 'Beach', 'Forest'];

export const FirstQuestion = ({ handleDestination, destinationChoice }) => {
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    if (destinationChoice) {
      setVisible(true);
    }
  };

  return (
    <section className="questions-container" id="first-question">
      <form className="first-question" onSubmit={(event) => event.preventDefault()}>
        <img className="first-question-img" src="assets/question1-img.png" alt="Beach vacation" />
        <div className="radio-buttons-text" role="radiogroup" tabIndex="0" aria-label="Pick a Destination: City, Beach or Forest">
          <p>Pick a destination:</p>
          {destinationOptions.map((destination) => (
            <label key={destination} aria-label={destination} htmlFor="destinationInput">
              <input
                id="destinationInput"
                name="color-options"
                type="radio"
                value={destination}
                onChange={(event) => handleDestination(event.target.value)}
                checked={destinationChoice === destination}
                required />
              {destination}
            </label>
          ))}
          <button className="first-button" onClick={checkInput}>NEXT</button>
        </div>
      </form>
      {(visible === true) && <SecondQuestion chosenDestination={destinationChoice} />}
    </section>
  );
};

/* All three questions are being generated inside <section> with class "questions-container".
They are 3 separate form elements */
/* The checkInput function will check that the user has chosen an option from the input (checking
destinationChoice in this case, and if that's true, it will change visible state to true, which
ends up generating the next question component */