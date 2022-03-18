import React from 'react'

const FirstQuestion = ({name, setName,  nextSection}) => {
    return (
        <article>
            <div className="container">
                <label htmlFor="name">What's your name?
                    <input 
                    type="text" 
                    name="name" 
                    onChange={(event)=>setName(event.target.value)} 
                    value={name} />
                </label> 
                
                <button className="next-btn"
                onClick= {nextSection}
                >
                Next question</button>
            </div>
        </article>
        
    )

}

export default FirstQuestion