import React, {useState} from 'react'

const Name = ({nameInput, IselectName}) => {
  
    return (
        <div className="name-container">
            <label className="name">
        <p>Name & Surname</p> 
        <input 
        type="type" 
        onChange={e => IselectName(e)} //onChange={setSize}
        value={nameInput}
        name="Name & Surname" 
        placeholder="Name Surname" 
        required />
        </label>
        </div>
        
    )
}

export default Name