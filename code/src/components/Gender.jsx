import React from 'react'

const Gender = (props) => {
    return (
        <div className="page-container">
        <h2>Please disclose your gender:</h2>
        <div className="grid">

            <div className="column-1">
            <p>Female</p>
            </div>
            <div className="column-2 radio-container">
            <label>
            <input type="radio" name="gender" value="Female" onChange={(event) => props.askGender(event.target.value)} />
            <span></span>
            </label>
            </div>

            <div className="column-1">
            <p>Male</p>
            </div>
            <div className="column-2 radio-container">
            <label>
            <input type="radio" name="gender" value="Female" onChange={(event) => props.askGender(event.target.value)} />
            <span></span>
            </label>
            </div>

            <div className="column-1">
            <p>Non-binary / Do not wish to disclose</p>
            </div>
            <div className="column-2 radio-container">
            <label>
            <input type="radio" name="gender" value="Female" onChange={(event) => props.askGender(event.target.value)} />
            <span></span>
            </label>
            </div>
            
        </div>
        </div>
    )
}

export default Gender