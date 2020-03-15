import React, { useGlobal } from 'reactn';
import { useState } from 'react';

// GENDER

const Gender = () => {
  const [gender, setGender] = useGlobal('gender');
  return (
    <form onSubmit={event => event.preventDefault()}>
      What's your gender:
      <select onChange={event => setGender(event.target.value)} value={gender}>
        <option value=''>Select </option>
        <option value='female'>Female</option>
        <option value='male'>Male</option>
        <option value='neutral'>Neutral</option>
      </select>
    </form>
  );
};

// FREQUENCY
const occasions = ['every day', 'several times a week', 'once a week or less'];

const Frequency = () => {
  const [frequency, setFrequency] = useGlobal('frequency');
  return (
    <form onSubmit={event => event.preventDefault()}>
      How often do you feel stressed?
      {occasions.map(occasion => (
        <label key={occasion}>
          <input
            type='radio'
            value={occasion}
            onChange={event => setFrequency(event.target.value)}
            checked={frequency === occasion}
          />
          {occasion}
        </label>
      ))}
    </form>
  );
};

// ACTIONS

const Actions = () => {
  const [action1, setAction1] = useGlobal('action1');
  const [action2, setAction2] = useGlobal('action2');
  return (
    <form onSubmit={event => event.preventDefault()}>
      Name two things you normally do in order to try to feel better?
      <label>
        1:
        <input
          type='text'
          onChange={event => setAction1(event.target.value)}
          value={action1}
        />
      </label>
      <label>
        2:
        <input
          type='text'
          onChange={event => setAction2(event.target.value)}
          value={action2}
        />
      </label>
    </form>
  );
};

// SUGGESTIONS

const Suggestions = () => {
  const [suggestion, setSuggestion] = useGlobal(false);

  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>
        Would you like some suggestions of what you can do to feel better?
        <input
          type='checkbox'
          checked={suggestion}
          onChange={event => setSuggestion(event.target.checked)}
        />
      </label>
    </form>
  );
};

// SUMMARY;

const Summary = () => {
  const [gender] = useGlobal('gender');
  const [frequency] = useGlobal('frequency');
  const [action1] = useGlobal('action1');
  const [action2] = useGlobal('action2');
  const [suggestion] = useGlobal(false);
  return (
    <div>
      <h1>SUMMARY</h1>
      <p>You're gender is {gender}.</p>
      <p>You feel stressed {frequency}.</p>
      <p>
        When you feel stressed you usually {action1} or {action2}.
      </p>
      <p>You would like some suggestions on what you can do: {suggestion}</p>
    </div>
  );
};

export const App = () => {
  return (
    <form>
      <div className='form'>
        <Gender />
        <Frequency />
        <Actions />
        <Suggestions />
        <Summary />
      </div>
    </form>
  );
};

export default App;
