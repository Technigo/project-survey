import React from 'react'

const FirstQuestion = ({name, setName}) => {
    return (
        <div>
            <label hmtlFor="name">What's your name?
            <input 
            type="text" 
            name="name" 
            onChange={(event)=>setName(event.target.value)} 
            value={name} />
        </label> 
    </div>
        
    )

}

export default FirstQuestion