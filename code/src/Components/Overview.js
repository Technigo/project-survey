import React from 'react'

export const Overview= (props) => {
    const {nameInput, emailInput, positionInput, officeInput, skillInput} = props
    return(
        <section>
            <h2>Overview:</h2>
            <p>Name: {nameInput}</p>
            <p>Email: {emailInput}</p>
            <p>Position: {positionInput}</p>
            <p>Location: {officeInput}</p>
            <p>Skills: {skillInput}</p>
        </section>
      )
} 