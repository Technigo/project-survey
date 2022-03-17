import React, { useState } from 'react'
import questions from './questions.json'

import Header from './components/Header.js'
import QuestionContainer from 'components/Questions.js'
import Summary from './components/Summary.js'
import { Counter } from './components/Counter.js'


export const App = () => {
  // const [counter, setCounter] = useState(0);

  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <QuestionContainer />
        {/* <Counter counter = {counter} setCounter = {setCounter} /> */}
      </div>
      <Summary />
    </>
  )
}
