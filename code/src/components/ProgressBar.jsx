import React from "react";

const ProgressBar = (props) => {
    let completed = ((props.pageNumber * 100)/9)
    const progressStatus = {
        width: `${completed}%`,
    }
    return (
        <div className="progress-container">
            <div className="progress-bar" style={progressStatus}>
            </div>
        </div>
    )
}

export default ProgressBar