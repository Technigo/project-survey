import React from 'react'

// State property 


const QuestionTwo = (props) => {
  const {email, onSecondInputChange} = props
 
 

  
    
  return (
    <section>  
      <div>
        <h1> email address</h1>
        <label htmlFor='emailadresss'>email adress here</label>
        <input 
        id="email" type="text" value={email} onChange={onSecondInputChange} />
    </div> 

 

  
   </section>
  )
}

export default QuestionTwo