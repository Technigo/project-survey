import React, {useState} from 'react'

export const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
           <div className="filler" style={{width: `${props.percentage}`}} ></div> 
        </div>
    )
}