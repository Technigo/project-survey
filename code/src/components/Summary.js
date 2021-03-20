import React from 'react'

export const Summary = ({name, brand, frequency}) => {

    return(
        <>
            <p>Name: {name}</p>
            <p>Brand: {brand}</p>
            <p>How often: {frequency}</p>
        </>
    )
}