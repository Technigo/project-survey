import React from 'react'

const NameInputText = ({ question, name, onNameChange}) => {
    return (
        <div>
            <p>We are so pleased to announce that you are the winner of a trip!</p>
            <p>But first we need to gather some basic information so we can start organizing your next holidays!</p> 
              
            <div className="question one">
              <label htmlFor={name}>{question}</label> 
                <input
                  id={name} 
                  type="text"
                  value={name} 
                  onChange={onNameChange}
                  className="form-input"
                  placeholder="Type your name here"
                  required
                />
            </div>
        </div>
    )
}

export default NameInputText
