import React, { useState } from 'react'
import { Type } from './Components/Type.js'
import { Favorit } from './Components/Favorit.js'
import { Time } from './Components/Time.js'
import { Thanks } from './Components/Thanks.js'


export const App = () => {
  const [page, setPage] = useState(0);
  const [answer, setAnswer] = useState([]);
  const handleNextPage = (answerValue) => {
    setPage(page + 1);
    answer.push(answerValue);
    setAnswer(answer);
  }
  const resetPages = () => setPage(0);
  const pages = [
    <Type whenNext={handleNextPage} />,
    <Favorit whenNext={handleNextPage} />,
    <Time whenNext={handleNextPage} />,
    <Thanks whenNext={resetPages} answer={answer}/>
  ]
  return (
    <div className="container">
      <header>
        <h1 className="head-text">BOARD GAME - SURVEY!</h1>
      </header>
      <div>
        {pages[page]}
      </div>
    </div>
  )
}
