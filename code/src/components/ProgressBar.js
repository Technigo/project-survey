import React from "react"

import Progress from "./Progress"

const ProgressBar = (props) => {

    const progressId = props.section.indexOf(props.progress)

    return (
        <div className="progress-bar">
            {props.section.slice(0, progressId + 1).map(item =>
                <Progress key={item} fill="fill" />
            )}
            {props.section.slice(progressId + 1).map(item =>
                <Progress key={item} fill="no-fill" />
            )}
        </div>
    )
}

export default ProgressBar