import React, { useState } from 'react';
import { ColorPicker } from './components/ColorPicker';
import 'components-css/landing-page.css';

export const App = () => {
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
    return () => setVisible(true);
  };

  return (
    <>
      <main className="landing-page">
        <h1>Vacation Plans Generator</h1>
        <h2>Your Corona-friendly digital getaway!</h2>
        
        <button onClick={checkInput()}><a href="#first-question">Get Started!</a></button>
        {(visible === true) && <ColorPicker />}
      </main>
    </>
  );
};

/* Added a visible state which will be changed via the onClick event when the button is clicked. 
The click will change the visible state to true via the checkInput function and when visible state 
changes to true, the next component is rendered, in this case the first question. Same logic
is applied to the coming components */