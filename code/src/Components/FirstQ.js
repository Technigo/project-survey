import React from 'react'

const FirstQuestion = ({name, setName,  nextSection, handleSubmit}) => {
    return (
        <div className="container">
            <article >
                <div className="text-group">
                    <label htmlFor="name" key="name" onSubmit={handleSubmit}>Please enter your name 
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
        </div>
        
    )

}

export default FirstQuestion