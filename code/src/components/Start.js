import React, { useState } from "react"

const Start = () => {
    const [startSurvey, SetStartSurvey] = useState(false)
    return (
        <div className="start-btn-wrapper">
            <button className="start-btn"> TAKE THE SURVEY </button>
            <p>It takes 2 minutes to complete this survey.</p>
        </div>
    )
}

export default Start