import React, { useState } from 'react';
import Header from 'components/Header';
import { FirstQuestion } from 'components/FirstQuestion';
import { SecondQuestion } from 'components/SecondQuestion';
import { ThirdQuestion } from 'components/ThirdQuestion';
import { FourthQuestion } from 'components/FourthQuestion';
import { FifthQuestion } from 'components/FifthQuestion';
import { Summary } from 'components/Summary';

export const App = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [oftenTravels, setOftenTravels] = useState('');
  const [favoriteThing, setThing] = useState('');
  const [place, setPlace] = useState();
  const [dreamDestination, setDreamDestination] = useState('');

  const handleStepIncrease = (event) => {
    event.preventDefault();
    setCounter(counter + 1)
  }

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <form onSubmit={handleStepIncrease}>
          {counter === 0 && (
            <Header />
          )}
          {counter === 1 && (
            <FirstQuestion name={name} setName={setName} />
          )}
          {counter === 2 && (
            <SecondQuestion
              name={name}
              oftenTravels={oftenTravels}
              setOftenTravels={setOftenTravels} />
          )}
          {counter === 3 && (
            <ThirdQuestion favoriteThing={favoriteThing} setThing={setThing} />
          )}
          {counter === 4 && (
            <FourthQuestion place={place} setPlace={setPlace} />
          )}
          {counter === 5 && (
            <FifthQuestion
              dreamDestination={dreamDestination}
              setDreamDestination={setDreamDestination} />
          )}
        </form>
        {counter === 6 && (
          <Summary
            name={name}
            oftenTravels={oftenTravels}
            favoriteThing={favoriteThing}
            place={place}
            dreamDestination={dreamDestination} />
        )}
      </div>
    </div>
  );
}