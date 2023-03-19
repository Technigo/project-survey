/* eslint-disable max-len */
import React, { useState } from 'react';
import Background from 'components/Background';
import Header from 'components/Header';
import Name from 'components/Name';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  return (
    <>
      <Background />
      {counter === 0 && <Header counter={counter} setCounter={setCounter} />}
      {counter === 1 && <Name counter={name} setCounter={setName} />}
    </>
  )
}
export default App;
