import React from 'react'






 const Name = ({userName, onInputChange, onNextChange}) => {
    return (
        <section className="container">
          
        <h2>Thank you for participating!</h2>
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

  