import React, { useState } from 'react';
import Button from 'components/Button';
import { Name } from 'components/Name'
import { Power } from './components/Power';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Result } from './components/Result';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [power, setPowers] = useState(false);
  const [hero, setHero] = useState('');

  return (
    <>

      {counter === 0 && (
        <><Header /><Name name={name} setName={setName} /></>
      )}
      {counter === 1 && (
        <Power power={power} setPowers={setPowers} inputLabel="Which superpower would you wish for?" />
      )}
      {counter === 2 && (

        <Hero hero={hero} setHero={setHero} inputLabel="TEXTquestion 2" />
      )}
      {counter >= 3 && (

        <Result power={power} hero={hero} name={name} />
      )}
      {counter < 2 && (

        <div className="next-step">
          <Button counter={counter} setCounter={setCounter} inputLabel="Next step" />
        </div>
      )}
      {counter === 3 && (
        <div className="next-step">
          <Button counter={counter} setCounter={setCounter} inputLabel="Submit" />
          <p>{counter}</p>
        </div>
      )}
    </>
  )
}
