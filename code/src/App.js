import React, { useState } from 'react';
import { Name } from 'components/Name';
import { HowManyConcerts } from 'components/HowManyConcerts';
import { FavoriteArtist } from 'components/FavoriteArtist';
import { Summary } from 'components/Summary';
import Header from 'components/Header';
import { ConcertPlace } from 'components/ConcertPlace'

export const App = () => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('');
  const [noOfConcerts, setNoConcerts] = useState('');
  const [place, setPlace] = useState();
  const [favoriteArtist, setFavoriteArtist] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1)
  }
  return (
    <div>
      {step === 1 && (
        <>
          <Header />
          <button type="button" onClick={handleStepIncrease}>Start survey</button>
        </>
      )}
      {step === 2 && (
        <Name name={name} setName={setName} />
      )}
      {step === 3 && (
        <HowManyConcerts name={name} noOfConcerts={noOfConcerts} setNoConcerts={setNoConcerts} />
      )}
      {step === 4 && (
        <ConcertPlace place={place} setPlace={setPlace} />
      )}
      {step === 5 && (
        <FavoriteArtist favoriteArtist={favoriteArtist} setFavoriteArtist={setFavoriteArtist} />
      )}
      {step === 6 && (
        <Summary
          name={name}
          noOfConcerts={noOfConcerts}
          place={place}
          favoriteArtist={favoriteArtist} />
      )}
      {(step > 1 && step < 6) && (
        <button type="button" onClick={handleStepIncrease}>Next question</button>
      )}
    </div>
  );
}
