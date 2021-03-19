import React from "react"

const Progress = ({ fill }) => {
    return (
        <>
            <div className="line"></div>
            <div className={fill}></div>
        </>
    )
}

export default Progress