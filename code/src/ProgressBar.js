import React from "react"
import "./progressbar.css"

export const ProgressBar = (props) => {
    const { width } = props

    return (
        <div className="empty-bar">
            <p className="completion" >{width * 33 + 1}% completed</p>
            <div className="filled-bar" style={{ width: `${width * 33.3}` + '%' }} ></div>
            <div className="background"></div>
        </div >

    )
}

