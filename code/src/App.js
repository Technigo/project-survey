import React, { useState } from 'react';
import Button from 'components/Button';
import { Name } from 'components/Name'
import { Power } from './components/Power';
import { Hero } from './components/Hero';
import { Result } from './components/Result';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [power, setPowers] = useState(false);
  const [hero, setHero] = useState('');

  const askName = (<Name name={name} setName={setName} />)
  const askPower = (

    <Power power={power} setPowers={setPowers} inputLabel="Choose power" />
  )

  const askHero = (
    <Hero hero={hero} setHero={setHero} inputLabel="Which hero" />
  )
  const showResult = (
    <Result power={power} hero={hero} name={name} />
  )

  return (
    <div className="container-main">
      {counter === 0 && askName}
      {counter === 1 && askPower}
      {counter === 2 && askHero}
      {counter >= 3 && showResult}
      {counter < 3 && (
        <div className="next-step">
          <Button counter={counter} setCounter={setCounter} inputLabel="Start" />
        </div>
      )}
    </div>
  )
}
