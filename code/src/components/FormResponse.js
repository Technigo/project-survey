import React from 'react'

const FormResponse = ({name, location, willTravel, roles}) => {
    return (
        <div className="form-response-div">
            <h1>Confirmation on your provided information:</h1>
            <p>Name: {name}</p>
            <p>Location: {location}</p>
            <p>Willing to travel: {willTravel ? 'Yes' : 'No'}</p>
            <p>Role: {roles}</p>
            <h2>Thanks! We will shortly contact you</h2>
      </div>
    )
}

export default FormResponse;