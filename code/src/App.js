import React, { useState } from 'react'
import { Type } from './Components/Type.js'
import { Favorit } from './Components/Favorit.js'
import { Time } from './Components/Time.js'
import { Thanks } from './Components/Thanks.js'


export const App = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="container">
      <header>
        <h1 className="head-text">BOARD GAME - SURVEY!</h1>
      </header>
      <div>
        {page === 0 && <Type whenNext={setPage}/>}
        {page === 1 &&  <Favorit whenNext={setPage}/>}
        {page === 2 && <Time  whenNext={setPage}/>}
        {page === 3 && <Thanks whenNext={setPage}/>}
      </div>
    </div>
  )
}
