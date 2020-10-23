import React, { useState } from 'react';

import { InputText } from './InputText';
import { InputRadio } from './InputRadio';
import { InputSelect } from './InputSelect';
import { Summary } from './Summary';
import { Submit } from './Submit';


export const App = () => {
  const [name, setName] = useState('');
  const [surfboard, setSurfboard] = useState('');
  const [wave, setWave] = useState('');
  const [showSummary, setShowSummary] = useState (false);
  const [section, setSection] = useState (1);

  const surfboards = ['Shortboard', 'Groveler surfboard', 'Fish surfboard', 'Funboard', 'Longboard', 'Big-wave board'];
  const waves = ['Weak', 'Medium', 'Powerful'];
  const numberOfQuestions = 3;

  const handleSubmit = event => {
    event.preventDefault();
    setSection(section + 1)
    section === numberOfQuestions && setShowSummary(true)
  }

  return (
    <section className="wrapper">
      <h1 tabIndex="0">Magic wave counter!</h1>

      <div className="form-container">
        {!showSummary ?
        <form onSubmit={handleSubmit}> 

            {section === 1 && (
              <InputText
                label="Hi! What is your name?"
                id="inputName"
                placeholder="Name"
                state={name}
                setState={setName}
              />
            )}
            {section === 2 && (
              <InputSelect
                label="What is your go to surfboard?"
                id="inputSurfboard"
                array={surfboards}
                state={surfboard}
                setState={setSurfboard}
              />
            )}
            {section === 3 && (
            <InputRadio
              label="What kind of waves do you like?"
              id="inputWaveSize"
              array={waves}
              state={wave}
              setState={setWave}
            />
            )}

        {section < numberOfQuestions ? <Submit information="▶" /> : <Submit information="Submit" tabIndex="0"/>}

      </form>

      :

      <Summary
        name={name}
        surfboard={surfboard}
        wave={wave}
      />
      }
      </div>
            
    </section>
  );
};

