import React from 'react'

const AgeGroup = (props) => {
    return (
        <>
        <h2>Please select your age group:</h2>
        <div className="grid">
        
            <div className="column-1">
            <label>15 to 20</label>
            </div>
            <div className="column-2">
            <input type="radio" name="age" value="15-20" onChange={(event) => props.askAge(event.target.value)}></input>
            </div>
            <div className="column-1">
            <label>21 to 30</label>
            </div>
            <div className="column-2">
            <input type="radio" name="age" value="21-30" onChange={(event) => props.askAge(event.target.value)}></input>
            
            </div>
            <div className="column-1">
            <label>31 to 40</label>
            </div>
            <div className="column-2">
            <input type="radio" name="age" value="31-40" onChange={(event) => props.askAge(event.target.value)}></input>
            
            </div>
            <div className="column-1">
            <label>41 to 50</label>
            </div>
            <div className="column-2">
            <input type="radio" name="age" value="41-50" onChange={(event) => props.askAge(event.target.value)}></input>
            
            </div>
            <div className="column-1">
            <label>51 to 60</label>
            </div>
            <div className="column-2">
            <input type="radio" name="age" value="51-60" onChange={(event) => props.askAge(event.target.value)}></input>
            
            </div>
            <div className="column-1">
            <label>61 and older</label>
            </div>
            <div className="column-2">
            <input type="radio" name="age" value="61plus" onChange={(event) => props.askAge(event.target.value)}></input>

            </div>
        </div>
        </>
    )
}

export default AgeGroup