import React from 'react'

export const FormHeading = (props) => {
    return (
        
        <div className="form-title-text-container">
            <h1>{props.formTitle}</h1>
            <p>{props.formText}</p>
        </div>
    )
}