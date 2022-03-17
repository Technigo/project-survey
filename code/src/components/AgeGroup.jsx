import React from 'react'

const ageArray = [
    {
        text: '15 to 20',
        id: '15-20',
        value: '15-20'
    },
    {
        text: '21 to 30',
        id: '21-30',
        value: '21-30'
    },
    {
        text: '31 to 40',
        id: '31-40',
        value: '31-40'
    },
    {
        text: '41 to 50',
        id: '41-50',
        value: '41-50'
    },
    {
        text: '51 to 60',
        id: '51-60',
        value: '51-60'
    },
    {
        text: '61 and older',
        id: '15-20',
        value: '61plus'
    },
]

const AgeGroup = ({age, askAge, error}) => {
    return (
        <div className="page-container">
        <h2>Please select your age group:</h2>
        <div className="grid" role="form">

        
        {ageArray.map(({ text, id, value }) => (
            <React.Fragment key={value}>
            <div className="column-1">
                <p>{text}</p>
            </div>
            <div className="column-2 radio-container">
                <label>
                <input
                    id={id}
                    tabIndex="0" 
                    type="radio" 
                    name="age" 
                    value={value} 
                    onChange={(event) => askAge(event.target.value)} 
                />
                <span></span>
                </label>
            </div>
            </React.Fragment>
        ))}

        </div>
        {error !== 'noError' && <p className="error-message">{error}</p>}
        </div>
    )
}

export default AgeGroup