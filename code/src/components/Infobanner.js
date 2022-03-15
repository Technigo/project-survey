import React from 'react'

export const Infobanner = (props) =>{
    const counter = props.counter
    if (counter % 2 === 0) {
        return(
            <div>
            <p>Its even!</p>
            </div>
        )
    } else {
        return(
            <p>Its not even!</p>
        )
    }
    
}
