import React, { useState } from "react";
import { ColorPicker } from "./components/ColorPicker";
import 'components-css/landing-page.css';

export const App = () => {
  const [visible, setVisible] = useState(false);

  const checkInput = () => {
      return () => setVisible(true)
  };

  return (
    <>
      <section className="landing-page">
        <h1>Vacation Plans Generator</h1>
        <h2>Your Corona-friendly digital getaway!</h2>
        
        <button onClick={checkInput()}><a href="#start-form">Get Started!</a></button>
        {(visible === true) && <ColorPicker />}
      </section>
    </>
  );
};

/* Check indentation and also that HTML elements are semantic, maybe sections instead of div for questions */
/* Check semi colons everywhere even in index.js and also that everything is "" double quotations */