import React, { useState } from 'react'
import './index.css'

import { ColorQuestion } from './ColorQuestion'
import { NameQuestion } from './NameQuestion'
import { FurQuestion } from './FurQuestion'
import { Summary } from './Summary'


export const App = () => {
  const [furOption, setFurOption] = useState("");
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [showSummary, setShowSummary] = useState(false);

const handlefurOptionChange = (e) => {
  setFurOption(e.target.value);
};

const handleColorChange = (e) => {
  setColor(e.target.value);
};

const handleNameChange = (e) => {
  setName(e.target.value);
};

const handleSubmit = event => {
  event.preventDefault();
  setShowSummary(true);
};

return (
  <div className="app">
 
    {!showSummary && (
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Answer a few questions about cats and you can win cat food for a whole year!</h1>
        </div>

        <NameQuestion username={name} onNameChange={handleNameChange} />

        <FurQuestion
          checked={FurQuestion === furOption}
          onfurOptionChange={handlefurOptionChange}
          />

        <ColorQuestion
          value={color}
          onColorChange={handleColorChange}
        />

        <button className="submit" type="Submit">Send</button>
      </form>
    )}

      {showSummary && (
        <Summary name={name} checked={furOption} value={color} />
      )}
    </div>
  );
};