import React from 'react'

const QuestionOne = (props) =>{
  const {name, onInputChange} = props
     


    return(
      <div>
          <h1> Hello! </h1>
          <label htmlFor='name'>Whats your name? </label> 
          <form onSubmit={event=>event.preventDefault()}>
          <input type="text" onChange={onInputChange} value={name}/>
       </form>
      </div>
      
    )
}

export default QuestionOne