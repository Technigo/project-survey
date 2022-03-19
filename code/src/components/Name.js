import React from 'react'






 const Name = ({userName, onInputChange, onNextChange}) => {
    return (
        <section className="container">
          
        <h1>Welcome to my media survey</h1>
        <label htmlFor="name">Please type your name</label>
        
        <input
        id="name" 
        type="text"
        value={userName}
        onChange={onInputChange}/>
        <button disabled={userName === ''} onClick={onNextChange} className="btn">Next</button>
        </section>
 
        )
        }


export default Name

  