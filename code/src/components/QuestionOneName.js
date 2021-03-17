import React from 'react'

const QuestionOneName = () => {
    

    return (
        <div>
           <label htmlFor="name">What's your name?</label> 
                <input
                  id="name"
                  type="text"
                  placeholder="Type your name here"
                  required
                />
        </div>
    )
  }


export default QuestionOneName
