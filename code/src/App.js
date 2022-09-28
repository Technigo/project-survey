import React, { useState } from 'react';
import { Name } from 'components/Name';
import { HowManyConcerts } from 'components/HowManyConcerts';
import { FavoriteArtist } from 'components/FavoriteArtist';
import { Summary } from 'components/Summary';
import Header from 'components/Header';
import { ConcertPlace } from 'components/ConcertPlace';
import { MusicGenre } from 'components/MusicGenre';

export const App = () => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('');
  const [noOfConcerts, setNoConcerts] = useState('');
  const [place, setPlace] = useState();
  const [favoriteArtist, setFavoriteArtist] = useState('');
  const [genre, setGenre] = useState('');

  const handleStepIncrease = () => {
    setStep(step + 1)
  }
  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        {step === 1 && (
          <>
            <Header />
            <button className="btn" type="button" onClick={handleStepIncrease}>Start survey</button>
          </>
        )}
        {step === 2 && (
          <Name name={name} setName={setName} />
        )}
        {step === 3 && (
          <HowManyConcerts name={name} noOfConcerts={noOfConcerts} setNoConcerts={setNoConcerts} />
        )}
        {step === 4 && (
          <MusicGenre genre={genre} setGenre={setGenre} />
        )}
        {step === 5 && (
          <ConcertPlace place={place} setPlace={setPlace} />
        )}
        {step === 6 && (
          <>
            <FavoriteArtist favoriteArtist={favoriteArtist} setFavoriteArtist={setFavoriteArtist} />
            <button className="btn" type="button" onClick={handleStepIncrease}>Show summary</button>
          </>
        )}
        {step === 7 && (
          <Summary
            name={name}
            noOfConcerts={noOfConcerts}
            genre={genre}
            place={place}
            favoriteArtist={favoriteArtist} />
        )}
        {(step > 1 && step < 6) && (
          <form>
            <button className="nextBtn" type="button" onClick={handleStepIncrease}>Next question</button>
          </form>
        )}
      </div>
    </div>
  );
}
