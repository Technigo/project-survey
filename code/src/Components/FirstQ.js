import React from 'react'

const FirstQuestion = ({name, setName}) => {
    return (
        <article>
            <label htmlFor="name">What's your name?
                <input 
                type="text" 
                name="name" 
                onChange={(event)=>setName(event.target.value)} 
                value={name} />
            </label> 
        </article>
        
    )

}

export default FirstQuestion