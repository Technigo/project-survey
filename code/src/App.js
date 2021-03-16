import React, { useState } from 'react'

import Header from './components/Header'
import FirstQuestion from './components/FirstQuestion'
import SecondQuestion from './components/SecondQuestion'
import ThirdQuestion from './components/ThirdQuestion'
import Summary from './components/Summary'


export const App = () => {
  const [visible, setVisible] = useState(false)
  const [time, setTime] = useState([])
  const [favoriteTime, setFavoriteTime] = useState('')
  const [favoritePlace, setFavoritePlace] = useState ([])

  const checkInput = () => {
    setVisible(true)
  }
  
  if (visible) {
      return (
        <main>
          <Header />
          <section className="question-container summary">
            <Summary time={time} favoriteTime={favoriteTime} place={favoritePlace} />
          </section>
        </main>
      )
  } else {
      return (
        <main>
          <Header />

          <section className="question-container">
            <FirstQuestion readingTime={time} setTime={setTime} />
          </section>

          <section className="question-container">
            <SecondQuestion favoriteTime={favoriteTime} setFavoriteTime={setFavoriteTime} />
          </section>

          <section className="question-container">
            <ThirdQuestion place={favoritePlace} setFavoritePlace={setFavoritePlace} />
          </section>

          <section className="question-container">
            <button
                className="start-btn send-btn"
                onClick={checkInput}
                aria-label="Button to Start"
                type="button">
                Send
            </button>
          </section>

        </main>
      )
  }
}



 {/*  {submit && (
        <section className="test">
          
        </section>
      )} */}