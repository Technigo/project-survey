import React from 'react'

const AgeGroup = (props) => {
    return (
        <div className="page-container">
        <h2>Please select your age group:</h2>
        <div className="grid">

            <div className="column-1">
            <p>15 to 20</p>
            </div>
            <div className="column-2 radio-container">
            <label>
            <input type="radio" name="age" value="15-20" onChange={(event) => props.askAge(event.target.value)} />
            <span></span>
            </label>
            </div>

            <div className="column-1">
            <p>21 to 30</p>
            </div>
            <div className="column-2 radio-container">
            <label>
            <input type="radio" name="age" value="21-30" onChange={(event) => props.askAge(event.target.value)} />
            <span></span>
            </label>
            </div>

            <div className="column-1">
            <p>31 to 40</p>
            </div>
            <div className="column-2 radio-container">
            <label>
            <input type="radio" name="age" value="31-40" onChange={(event) => props.askAge(event.target.value)} />
            <span></span>
            </label>
            </div>

            <div className="column-1">
            <p>41 to 50</p>
            </div>
            <div className="column-2 radio-container">
            <label>
            <input type="radio" name="age" value="41-50" onChange={(event) => props.askAge(event.target.value)} />
            <span></span>
            </label>
            </div>

            <div className="column-1">
            <p>51 to 60</p>
            </div>
            <div className="column-2 radio-container">
            <label>
            <input type="radio" name="age" value="51-60" onChange={(event) => props.askAge(event.target.value)} />
            <span></span>
            </label>
            </div>

            <div className="column-1">
            <p>61 and older</p>
            </div>
            <div className="column-2 radio-container">
            <label>
            <input type="radio" name="age" value="61plus" onChange={(event) => props.askAge(event.target.value)} />
            <span></span>
            </label>
            </div>

        </div>
        </div>
    )
}

export default AgeGroup