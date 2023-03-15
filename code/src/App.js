import React, { useState } from 'react'
import { Greeting } from 'components/Greeting';
import { Name } from 'components/Name';
import { RadioButtons } from 'components/RadioButtons';
import { DropDown } from 'components/DropDown';
import { Summary } from 'components/Summary';
import './App.css';

export const App = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [answer, setAnswer] = useState('')
  const [ageGroup, setAgeGroup] = useState('')

  const handlePageIncrease = () => {
    setPage(page + 1)
  }

  const handlePageDecrease = () => {
    setPage(page - 1)
  }

  return (
    <div className="page-container">
      {page === 1 && (
        <>
          <Greeting />
          <button type="button" onClick={handlePageIncrease}>Next</button>
        </>
      )}
      {page === 2 && (
        <>
          <Name name={name} setName={setName} />
          <button type="button" onClick={handlePageDecrease}>Previous</button>
          <button type="button" onClick={handlePageIncrease}>Next</button>
        </>
      )}
      {page === 3 && (
        <>
          <RadioButtons ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
          <button type="button" onClick={handlePageDecrease}>Previous</button>
          <button type="button" onClick={handlePageIncrease}>Next</button>
        </>
      )}
      {page === 4 && (
        <>
          <DropDown answer={answer} setAnswer={setAnswer} />
          <button type="button" onClick={handlePageDecrease}>Previous</button>
          <button type="button" onClick={handlePageIncrease}>Next</button>
        </>
      )}
      {page === 5 && (
        <>
          <h2>Last question</h2>
          <button type="button" onClick={handlePageDecrease}>Previous</button>
          <button type="submit" onClick={handlePageIncrease}>Submit</button>
        </>
      )}
      {page === 6 && (
        <Summary name={name} ageGroup={ageGroup} />
      )}
      <p>Current page: {page}</p>
    </div>
  )
}
