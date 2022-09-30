import React, { useState } from 'react';
import Header from 'components/Header';
import { Name } from 'components/Name';
import { HowManyConcerts } from 'components/HowManyConcerts';
import { MusicGenre } from 'components/MusicGenre';
import { ConcertPlace } from 'components/ConcertPlace';
import { FavoriteArtist } from 'components/FavoriteArtist';
import { Summary } from 'components/Summary';

export const App = () => {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('');
  const [noOfConcerts, setNoConcerts] = useState('');
  const [genre, setGenre] = useState('');
  const [place, setPlace] = useState();
  const [favoriteArtist, setFavoriteArtist] = useState('');

  const handleStepIncrease = (e) => {
    e.preventDefault();
    setStep(step + 1)
  }

  return (
    <div className="outer-wrapper">
      <div className="inner-wrapper">
        <form onSubmit={handleStepIncrease}>
          {step === 0 && (
            <Header />
          )}
          {step === 1 && (
            <>
              <Name name={name} setName={setName} />
              <div className="question-number">
                {step <= 7 && <p>Question number: {step}/7</p>}
              </div>
            </>
          )}
          {step === 2 && (
            <HowManyConcerts
              name={name}
              noOfConcerts={noOfConcerts}
              setNoConcerts={setNoConcerts} />
          )}
          {step === 3 && (
            <MusicGenre genre={genre} setGenre={setGenre} />
          )}
          {step === 4 && (
            <ConcertPlace place={place} setPlace={setPlace} />
          )}
          {step === 5 && (
            <FavoriteArtist
              favoriteArtist={favoriteArtist}
              setFavoriteArtist={setFavoriteArtist} />
          )}
        </form>
        {step === 6 && (
          <Summary
            name={name}
            noOfConcerts={noOfConcerts}
            genre={genre}
            place={place}
            favoriteArtist={favoriteArtist} />
        )}
      </div>
    </div>
  );
}
