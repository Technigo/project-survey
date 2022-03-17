import React, { useState } from 'react'
import Age from 'components/QuestionThree'
import Name from 'components/Name'
import Mediaunits from 'components/QuestionOne'
import Mediahours from 'components/QuestionTwo'

const SurveyForm = () => {
  const [userName, setUserName] = useState("")
  const [age, setUserAge] = useState("")  
  const [mediaselect, setMediaSelect] = useState("")
  const [hourselect, setHourSelect] = useState("")
  
  
  const onInputChange = (event) => {
      setUserName(event.target.value)
    } 
    
    
  const onAgeChange =(age) => {
    setUserAge(age)
  }

  const onMediaSelect = (event) =>{
    setMediaSelect(event.target.value)
  }

  const onHourSelect =(event) =>{
    setHourSelect(event.target.value)
  }
        
        return (
         
            
            <section>
            <Name userName={userName} onInputChange={onInputChange}/>
            <Mediaunits mediaselect={mediaselect} onMediaSelect={onMediaSelect} />
            <Mediahours hourselect={hourselect} onHourselect={onHourSelect} />
            <Age age={age} onAgeChange={onAgeChange}/>
            </section>
            
            
        )

}

export default SurveyForm

