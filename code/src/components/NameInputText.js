import React from 'react'

const NameInputText = ({ question, nameValue, onNameChangeFunction}) => {
    return (
        <div>
            <p>We are so pleased to announce that you are the winner of a trip!</p>
            <p>But first we need to gather some basic information so we can start organizing your next holidays!</p> 
              
            <div className="question one">
              <label htmlFor={nameValue}>{question}</label> 
                <input
                  id={nameValue} 
                  type="text"
                  value={nameValue} 
                  onChange={onNameChangeFunction}
                  className="form-input"
                  placeholder="Type your name here"
                  required
                />
            </div>
        </div>
    )
}

export default NameInputText
