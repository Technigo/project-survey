import React from "react";

const ProgressBar = (props) => {
    console.log(props.pageNumber)
    let completed = ((props.pageNumber * 100)/9)
    console.log(completed)
    console.log(`${completed}%`)
    const progressStatus = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: 'black',
        transition: 'width 1s ease-in-out',
    }
    return (
        <div className="progress-container">
            <div style={progressStatus}>
            </div>
        </div>
    )
}

export default ProgressBar