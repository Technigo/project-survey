import React, { useState } from 'react'
import { Greeting } from 'components/Greeting';
import { NextButton } from 'components/NextButton';
import { PreviousButton } from 'components/PreviousButton';
import { SubmitButton } from 'components/SubmitButton';
import { Name } from 'components/Name';
import { Monster } from 'components/Monster';
import { TimeChoice } from 'components/TimeChoice';
import { FamousPerson } from 'components/FamousPerson';
import { SummaryDreamFeedback } from 'components/SummaryDreamFeedback';
import { WhatYouLove } from 'components/WhatYouLove';
import './App.css';

export const App = () => {
  const [page, setPage] = useState(1)
  const [name, setName] = useState('')
  const [famousPerson, setFamousPerson] = useState('')
  const [yourTimeChoice, setYourTimeChoice] = useState('')
  const [yourMonster, setYourMonster] = useState('')
  const [yourLove, setYourLove] = useState('')

  return (
    <>
      <header>
        <h1 className="header-title">The Dream Survey</h1>
      </header>
      <div className="page-container">
        {page === 1 && (
          <>
            <Greeting />
            <NextButton page={page} setPage={setPage} />
          </>
        )}
        {page === 2 && (
          <>
            <Name name={name} setName={setName} />
            <PreviousButton page={page} setPage={setPage} />
            <NextButton page={page} setPage={setPage} />
          </>
        )}
        {page === 3 && (
          <>
            <Monster yourMonster={yourMonster} setYourMonster={setYourMonster} />
            <PreviousButton page={page} setPage={setPage} />
            <NextButton page={page} setPage={setPage} />
          </>
        )}
        {page === 4 && (
          <>
            <FamousPerson famousPerson={famousPerson} setFamousPerson={setFamousPerson} />
            <PreviousButton page={page} setPage={setPage} />
            <NextButton page={page} setPage={setPage} />
          </>
        )}
        {page === 5 && (
          <>
            <TimeChoice yourTimeChoice={yourTimeChoice} setYourTimeChoice={setYourTimeChoice} />
            <PreviousButton page={page} setPage={setPage} />
            <NextButton page={page} setPage={setPage} />
          </>
        )}
        {page === 6 && (
          <>
            <WhatYouLove yourLove={yourLove} setYourLove={setYourLove} />
            <PreviousButton page={page} setPage={setPage} />
            <SubmitButton page={page} setPage={setPage} />
          </>
        )}
        {page === 7 && (
          <SummaryDreamFeedback
            name={name}
            yourMonster={yourMonster}
            famousPerson={famousPerson}
            yourTimeChoice={yourTimeChoice}
            yourLove={yourLove} />
        )}
      </div>
      <footer>
        <p className="footer-text">Site by Frida Nordenlöw</p>
      </footer>
    </>
  )
}
