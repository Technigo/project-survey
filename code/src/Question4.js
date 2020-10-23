import React from 'react'



export const Question4 = ({ userName, setUserName, onUserNameChange, name, discription, gift}) => {
    return (
        <section>
            <h2>Send Love from</h2>
            <label htmlFor="userName">Enter your name</label>
            <input 
                value={userName} 
                onChange={e => onUserNameChange(e.target.value)} 
                id="userName" 
                type="text" 
            />

            
         </section>
    )
}