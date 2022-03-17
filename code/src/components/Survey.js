import React, { useState } from 'react'
import Age from 'components/QuestionThree'
import Name from 'components/Name'

const SurveyForm = () => {
  const [userName, setUserName] = useState("")
   const [age, setUserAge] = useState("")  
  
  
  
  
  const onInputChange = (event) => {
      setUserName(event.target.value)
    } 
    
    
  const onAgeChange =(age) => {
    setUserAge(age)
  }
        
        return (
         <>
            <section>
            <Name userName={userName} onInputChange={onInputChange}/>
            </section>
            <section>
            <Age age={age} onAgeChange={onAgeChange}/>
            </section>
            
            </>
        )

}

export default SurveyForm

