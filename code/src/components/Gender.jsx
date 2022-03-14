import React from 'react'

const Gender = (props) => {
    return (
        <>
        <h2>Please select your gender:</h2>
        <div>
        <input type="radio" name="gender" value="Female" onChange={(event) => props.askGender(event.target.value)}></input>
        <label>Female</label>
        </div>
        <div>
        <input type="radio" name="gender" value="Male" onChange={(event) => props.askGender(event.target.value)}></input>
        <label>Male</label>
        </div>
        <div>
        <input type="radio" name="gender" value="Neither" onChange={(event) => props.askGender(event.target.value)}></input>
        <label>Non-binary / Do not wish to disclose</label>
        </div>
        </>
    )
}

export default Gender