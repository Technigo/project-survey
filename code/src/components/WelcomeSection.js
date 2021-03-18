import React from 'react';
import StartNextButton from './StartNextButton';


const WelcomeSection = ({section, question, setSection, progress, setProgress}) => {
  return (
    <div className="welcome-card">
      <p>
        So, you want to go on a holiday but you’re not sure where you want to go. There are so many countries, regions, cities and towns in the world that just making this simple decision can be a bit overwhelming. We are here to help! Answer the questions and we compe up with suggestions for your next holidays! 
      </p>
    <StartNextButton 
      section={section} 
      question={question} 
      setSection={setSection} 
      button="Start"
      progress={progress}
      setProgress= {setProgress}
      />
    </div>
  )
}
export default WelcomeSection