import React from 'react'

const FirstQuestion = ({name, setName, nextSection, backSection}) => {
    return (
        <article>
            <label htmlFor="name">What's your name?
                <input 
                type="text" 
                name="name" 
                onChange={(event)=>setName(event.target.value)} 
                value={name} />
            </label> 
            <button
            onClick= {nextSection}
            >
            Next question</button>
        </article>
        
    )

}

export default FirstQuestion