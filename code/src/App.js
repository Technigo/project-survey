import React from 'react'

import Header from './components/Header.js'
import QuestionContainer from 'components/Questions.js'

export const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div>
        <QuestionContainer />
      </div>
    </>
  )
}
