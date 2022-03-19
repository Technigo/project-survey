import React, { useState } from 'react'

import Age from 'components/QuestionThree'
import Name from 'components/Name'
import Mediaunits from 'components/QuestionOne'
import Mediahours from 'components/QuestionTwo'
import Intro from 'components/Intro'
import Summary from 'components/Summary'

const SurveyForm = () => {
  const [userName, setUserName] = useState("")
  const [age, setUserAge] = useState("")  
  const [mediaselect, setMediaSelect] = useState("")
  const [hourselect, setHourSelect] = useState("")
  const [next, setNext] = useState(1)
  
  const onInputChange = (event) => {
      setUserName(event.target.value)
  } 
    
  const onAgeChange =(event) => {
    setUserAge(event.target.value)
  }

  const onMediaSelect = (event) =>{
    setMediaSelect(event.target.value)
  }

  const onHourSelect =(event) =>{
    setHourSelect(event.target.value)
  }

  const handleNextChange = () => {
    setNext(next + 1)
  }
  
  const handleBackChange = () => {
    setNext(next - 1);
  };
  
        
        return (
         
            
            <section>
              {next === 1 && 
              <Intro  onNextChange={handleNextChange} />}

              {next === 2 && 
              <Name userName={userName} 
                    onInputChange={onInputChange} 
                    onNextChange={handleNextChange} />}

              {next === 3 && 
              <Mediaunits 
                          mediaselect={mediaselect} 
                          onMediaSelect={onMediaSelect} 
                          onNextChange={handleNextChange}
                          onBackChange={handleBackChange} />}

              {next === 4 && 
              <Mediahours hourselect={hourselect} 
                          onHourSelect={onHourSelect}  
                          onNextChange={handleNextChange}
                          onBackChange={handleBackChange} />}

              {next === 5 && 
              <Age  age={age} 
                    onAgeChange={onAgeChange} 
                    onNextChange={handleNextChange}
                    onBackChange={handleBackChange} />}

              {next === 6 && 
              <Summary userName={userName} 
                       mediaselect={mediaselect} 
                       hourselect={hourselect}
                       age={age}
                       onBackChange={handleBackChange}  />}
        
            </section>
             )
            }

export default SurveyForm

