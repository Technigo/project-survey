import React from 'react';

import './WelcomeSection.css'

import StartNextButton from './StartNextButton';



const WelcomeSection = ({section, question, setSection, progress, setProgress}) => {
  return (
    <section className="welcome-card">
      <h2 className="welcome-heading">Next holiday destination survey</h2>
      <p className="welcome-text">
        So, you want to go on a holiday but you’re not sure where you want to go. There are so many countries, regions, cities and towns in the world that just making this simple decision can be a bit overwhelming.
      </p>
      <p className="welcome-text">Great! We are here to help you choose it!</p>
      <p className="welcome-text">Answer the survey questions and we come up with suggestions for your next holidays!</p>
    <StartNextButton 
      section={section} 
      question={question} 
      setSection={setSection} 
      button="Start survey"
      progress={progress}
      setProgress= {setProgress}
      />
    </section>
  )
}
export default WelcomeSection