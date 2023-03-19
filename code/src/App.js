/* eslint-disable global-require */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Movie } from 'components/Movie';
import { Show } from 'components/Show';
import { Name } from './components/Name'
import { Results } from './components/Results';
import { Genre } from './components/Genre';

export const App = () => {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [movie, setMovie] = useState('')
  const [show, setShow] = useState('')

  const handleStepIncrease = () => {
    setStep(step + 1)
  }

  return (
    <>
      <img src={require('./components/Assets/movies-background.jpg')} alt="background of movie/tv related stuff" />
      <form className="surveyForm">
        {step === 1 && (
          <Name name={name} setName={setName} />
        )}
        {step === 2 && (
          <Genre genre={genre} setGenre={setGenre} />
        )}
        {step === 3 && (
          <Movie movie={movie} setMovie={setMovie} />
        )}
        {step === 4 && (
          <Show show={show} setShow={setShow} />
        )}
        {step >= 5 && (
          <Results name={name} genre={genre} movie={movie} show={show} />
        )}

        {step < 5 && (
          <>
            <p>Current page: {step} </p>
            <button type="button" onClick={handleStepIncrease}>Next</button>
          </>
        )}
      </form>
    </>
  )
}
