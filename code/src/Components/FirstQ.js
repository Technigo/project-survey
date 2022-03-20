import React from 'react'

const FirstQuestion = ({name, setName,  nextSection, handleSubmit}) => {
    return (
        
            <article >
                <div className="text-group">
                    <h1>Welcome to the music survey</h1>
                    <label htmlFor="name" 
                    key="name" 
                    onSubmit={handleSubmit}
                    className="name-label">
                    Enter your name
                        <input 
                        className="name-input"
                        type="text" 
                        name="name" 
                        onChange={(event)=>setName(event.target.value)} 
                        value={name} />
                    </label> 
                </div>

                <div className="btn-group">
                <button className="next-btn" disabled={name === ""}
                onClick= {nextSection}
                >
                Next question</button>
                </div>
            </article>
        
    )

}

export default FirstQuestion