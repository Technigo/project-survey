import React from "react"

import Progress from "./Progress"

const ProgressBar = ({ progress, section }) => {

    const progressId = section.indexOf(progress)

    return (
        <div className="progress-bar">
            {section.slice(0, progressId + 1).map(item =>
                <Progress key={item} fill="fill" />
            )}
            {section.slice(progressId + 1).map(item =>
                <Progress key={item} fill="no-fill" />
            )}
        </div>
    )
}

export default ProgressBar