import React from 'react'

const FormResponse = ({input}) => {
    return (
        <div className="form-response-div">
            <h1>Confirmation on your provided information:</h1>
            <p>Name: {input.name}</p>
            <p>Location: {input.location}</p>
            <p>Willing to travel: {input.willTravel ? 'Yes' : 'No'}</p>
            <p>Role: {input.roles}</p>
            <h2>Thanks! We will shortly contact you</h2>
      </div>
    )
}

export default FormResponse;