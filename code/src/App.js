import React, { useState } from 'react'
import { Type } from './Components/Type.js'
import { Favorit } from './Components/Favorit.js'
import { Time } from './Components/Time.js'
import { Thanks } from './Components/Thanks.js'


export const App = () => {
  const [page, setPage] = useState(0);
  const handleNextPage = () => setPage(page + 1);
  const resetPages = () => setPage(0);
  const pages = [
    <Type whenNext={handleNextPage} />,
    <Favorit whenNext={handleNextPage} />,
    <Time whenNext={handleNextPage} />,
    <Thanks whenNext={resetPages} />
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
