import React, { useState } from 'react';
import { Gender } from './Gender';
import { Frequency } from './Frequency';
import { Actions } from './Actions';
import { Summary } from './Summary';
import Suggestions from './Suggestions';

export const App = () => {
  const [gender, setGender] = useState('');
  const [frequency, setFrequency] = useState();
  const [action1, setAction1] = useState('');
  const [action2, setAction2] = useState('');
  const [suggestion, setSuggestion] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
    setShowForm(false);
  };

  return (
    <main>
      {showSummary && (
        <Summary
          gender={gender}
          frequency={frequency}
          action1={action1}
          action2={action2}
          suggestion={suggestion}
        />
      )}

      {showForm && (
        <form onSubmit={handleSubmit}>
          <h1>Feeling stressed?</h1>
          <Gender setGender={setGender} gender={gender} />
          <Frequency setFrequency={setFrequency} frequency={frequency} />
          <Actions
            setAction1={setAction1}
            setAction2={setAction2}
            action1={action1}
            action2={action2}
          />
          <Suggestions setSuggestion={setSuggestion} suggestion={suggestion} />
          <button type="submit">SUBMIT</button>
        </form>
      )}
    </main>
  );
};

export default App;

