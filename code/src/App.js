import React, { useState } from 'react'
import { Greeting } from 'components/Greeting';
import { Name } from 'components/Name';
import { NextButton } from 'components/NextButton';
import { PreviousButton } from 'components/PreviousButton';
import { SubmitButton } from 'components/SubmitButton';
import { AgeQuestion } from 'components/AgeQuestion';
import { FamousPerson } from 'components/FamousPerson';
import { CreatedDream } from 'components/CreatedDream';
import './App.css';

export const App = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [famousPerson, setFamousPerson] = useState('')
  const [yourAge, setYourAge] = useState('')

  return (
    <div className="page-container">
      {page === 1 && (
        <>
          <Greeting />
          <NextButton counter={page} setCounter={setPage} />
        </>
      )}
      {page === 2 && (
        <>
          <Name name={name} setName={setName} />
          <PreviousButton counter={page} setCounter={setPage} />
          <NextButton counter={page} setCounter={setPage} />
        </>
      )}
      {page === 3 && (
        <>
          <FamousPerson famousPerson={famousPerson} setFamousPerson={setFamousPerson} />
          <PreviousButton counter={page} setCounter={setPage} />
          <NextButton counter={page} setCounter={setPage} />
        </>
      )}
      {page === 4 && (
        <>
          <AgeQuestion yourAge={yourAge} setYourAge={setYourAge} />
          <PreviousButton counter={page} setCounter={setPage} />
          <NextButton counter={page} setCounter={setPage} />
        </>
      )}
      {page === 5 && (
        <>
          <h2>Last question</h2>
          <PreviousButton counter={page} setCounter={setPage} />
          <SubmitButton counter={page} setCounter={setPage} />
        </>
      )}
      {page === 6 && (
        <CreatedDream name={name} />
      )}
    </div>
  )
}
