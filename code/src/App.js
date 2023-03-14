import React, { useState } from 'react';
import Button from 'components/Button';
import { Name } from 'components/Name'

export const App = () => {
  // const [superPower, setSuperPower] = useState('initial_value');
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  return (

    <div className="wrapper">
      {/* <h2>To dream away to your hero days, click below</h2>
      <p>Your name</p>
      <h3>{name}</h3> */}
      {/* <button type="button" onClick={() => setSuperPower('test')}>test btn</button>
      <p>{superPower}</p> */}

      {counter === 0 && (
        <div>
          <Name name={name} setName={setName} />
          {/* <button type="button" onClick={() => setCounter(1)}>Below button</button> */}
        </div>)}
      {counter === 1 && (
        <div>
          <Name name={name} setName={setName} />
          {/* <button type="button" onClick={() => setCounter(1)}>Below button</button> */}
        </div>)}
      {counter === 2 && (
        <div>
          <Name name={name} setName={setName} />
          {/* <button type="button" onClick={() => setCounter(1)}>Below button</button> */}
        </div>)}
      {counter === 3 && (
        <div>
          <Name name={name} setName={setName} />
          {/* <button type="button" onClick={() => setCounter(1)}>Below button</button> */}
        </div>)}
      <p>{counter}</p>
      <Button counter={counter} setCounter={setCounter} />
    </div>
  );
}