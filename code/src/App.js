import React from 'react'
import { FirstQuestion } from './components/FirstQuestion'
import './app.css'

export const App = () => {
  return (
    <div className='main'>

      <div className='intro'>
        <h1>Self-care survey</h1>
        <h2>Let's start with a quick self-assessment</h2>
      </div>

      <FirstQuestion />
    </div >
  )
}
