import React from "react"

const Progress = (props) => {
    return (
        <>
            <div className="line"></div>
            <div className={props.fill}></div>
        </>
    )
}

export default Progress