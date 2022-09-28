import React, { useState } from 'react';
import { Name } from 'components/Name';
import { HowManyConcerts } from 'components/HowManyConcerts';
import { FavoriteArtist } from 'components/FavoriteArtist';
import { Summary } from 'components/Summary';

export const App = () => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('');
  const [noOfConcerts, setNoOfConcerts] = useState('');
  const [favoriteArtist, setFavoriteArtist] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1)
  }
  return (
    <div>
      {step === 1 && (
        <Name name={name} setName={setName} />
      )}
      {step === 2 && (
        <HowManyConcerts noOfConcerts={noOfConcerts} setNoOfConcerts={setNoOfConcerts} />
      )}
      {step === 3 && (
        <FavoriteArtist favoriteArtist={favoriteArtist} setFavoriteArtist={setFavoriteArtist} />
      )}
      {step === 4 && (
        <Summary name={name} noOfConcerts={noOfConcerts} favoriteArtist={favoriteArtist} />
      )}
      {step < 4 && (
        <button type="button" onClick={handleStepIncrease}>Next question</button>
      )}
    </div>
  );
}
