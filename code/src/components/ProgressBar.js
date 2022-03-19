import React from 'react'

const ProgressBar = ({currentQuestion}) => {
    const progressBarArray = [
        {bgcolor: 'lightgreen', width: '25%' },
        {bgcolor: 'lightgreen', width: '50%' },
        {bgcolor: 'lightgreen', width: '75%' },
        {bgcolor: 'lightgreen', width: '100%'},

    ];

    return (
        <div style={{width: '200px', display: 'flex', backgroundColor: 'lightgrey', marginBottom: '5vh'}}>
        {progressBarArray.map((fill, index) => {
            if(index === 0 && currentQuestion === 0) {
                return (
                    <div style={{width: `${fill.width}`, backgroundColor: `${fill.bgcolor}`}}>{fill.width}</div>
                )
        } else if (index === 1 && currentQuestion === 1) {
                return (
                    <div style={{width: `${fill.width}`, backgroundColor: `${fill.bgcolor}`}}>{fill.width}</div>
                )
        } else if (index === 2 && currentQuestion === 2) {
                return (
                    <div style={{width: `${fill.width}`, backgroundColor: `${fill.bgcolor}`}}>{fill.width}</div>
                )
        } else if (index === 3 && currentQuestion === 3) {
                return (
                    <div style={{width: `${fill.width}`, backgroundColor: `${fill.bgcolor}`}}>{fill.width}</div>
                )
        } else {
                return (
                    <div></div>
                )
        }
        })}                
        </div>
    )
}

export default ProgressBar;