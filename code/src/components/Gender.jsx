import React from 'react'

const Gender = (props) => {
    return (
        <>
        <h2>Please disclose your gender:</h2>
        <div className="grid">
            <div className="column-1">
            <label>Female</label>
            </div>
            <div className="column-2">
            <input type="radio" name="gender" value="Female" onChange={(event) => props.askGender(event.target.value)}></input>  
            </div>
            <div className="column-1">
            <label>Male</label>
            </div>
            <div className="column-2">
            <input type="radio" name="gender" value="Male" onChange={(event) => props.askGender(event.target.value)}></input>   
            </div>
            <div className="column-1">
            <label>Non-binary / Do not wish to disclose</label>
            </div>
            <div className="column-2">
            <input type="radio" name="gender" value="Neither" onChange={(event) => props.askGender(event.target.value)}></input>
            </div>
        </div>
        </>
    )
}

export default Gender