import React from 'react'

const NameInputText = ({ question, nameValue, onNameChangeFunction}) => {
    return (
       
            <div>
              <label className="question" htmlFor={nameValue}>{question}</label> 
                <input
                  id={nameValue} 
                  type="text"
                  value={nameValue} 
                  onChange={onNameChangeFunction}
                  className="text-input"
                  placeholder="Type your name here"
                  required
                />
            </div>
        
    )
}

export default NameInputText
