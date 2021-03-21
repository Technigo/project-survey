import React from 'react'

import StartNextButton from './StartNextButton'

import './WelcomeSection.css'

const WelcomeSection = ({setQuestion, progress, setProgress}) => {
  return (
    <section className="welcome-card">

      <div className="welcome-text-container">
        <h1 className="welcome-heading">Are you ready for your next adventure?</h1>
        <p className="welcome-text">Great! We are here to help you choose it!</p>
        <p className="welcome-text">Answer the survey questions and we come up with suggestions for your next holidays!</p>
      </div>
      <StartNextButton
      setQuestion={setQuestion} 
      progress={progress}
      setProgress= {setProgress}
      />

    </section>
  )
}
export default WelcomeSection