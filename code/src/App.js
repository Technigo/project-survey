import React, { useState } from 'react';
import { FirstQuestion } from './components/FirstQuestion';
import 'components-css/landing-page.css';

export const App = () => {
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    setVisible(true);
  };

  return (
    <>
      <main>
        <section className="landing-page-container">
          <h1 className="vacation-title" tabIndex="0">Vacation Plans Generator</h1>
          <h2 className="vacation-slogan" tabIndex="0">Your Corona-friendly<br></br>digital getaway!</h2>
          <button className="start-button" onClick={checkInput} aria-label="Press Enter and Tab to Start" type="button"><a href="#first-question" aria-hidden="true" tabIndex="-1">START</a></button>
          <img src="assets/landing-page-img.png" className="img-landing" alt="Vacation planner" />
        </section>
        {(visible === true) && <FirstQuestion />}
      </main>
    </>
  );
};

/* Added a visible state which will be changed via the onClick event when the button is clicked.
The click will change the visible state to true via the checkInput function and when visible state
changes to true, the next component is rendered, in this case the first question. Same logic
is applied to the coming components */