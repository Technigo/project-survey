import React from 'react'

export const Overview= (props) => {
    const {nameInput, surnameInput} = props
    return(
        <section>
            <h2>Overview:</h2>
            <p>Name: {nameInput}</p>
            <p>Surname: {surnameInput}</p>
        </section>
      )
} 