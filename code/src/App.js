import React, {useState} from 'react'
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

const handlefurOptionChange = (furArray) => {
  setFurOption(furArray);
};

const handleColorChange = (newColor) => {
  setColor(newColor);
};

const handleNameChange = (newName) => {
  setName(newName);
};

const handleSubmit = event => {
  event.preventDefault();
  setShowSummary(true);
};

return (
  <div className="App">
 
    {!showSummary && (
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Answer a few questions and you can win cat food for a whole year!</h1>
        </div>

        <NameQuestion username={name} onNameChange={handleNameChange} />

        <FurQuestion
          checked={furOption}
          onfurOptionChange={handlefurOptionChange}
          />

        <ColorQuestion
          value={color}
          onColorChange={handleColorChange}
        />

        <button type="Submit">Submit</button>
      </form>
    )}

      {showSummary && (
        <Summary name={name} checked={furOption} value={color} />
      )}
    </div>
  );
};