import React from 'react'

export const Progress = ({ current, total }) => {
    return (
        <p className='progress'>Sweet {current} of {total}</p>
    )
}