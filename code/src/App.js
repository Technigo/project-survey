import React from 'react'
import { FirstQuestion } from './components/FirstQuestion'
import { SecondQuestion } from './components/SecondQuestion'
import './app.css'

export const App = () => {
  return (
    <div className='main'>

      <div className='intro'>
        <h1>Self-care survey</h1>
        <h2>Let's start with a quick self-assessment check</h2>
        <div class="container">
          <img src="img/heart.png" class="heart" alt="human heart" />
        </div>
        <button>begin</button>
      </div>
      <div>
        <FirstQuestion />
      </div>
      <SecondQuestion />
    </div >
  )
}
