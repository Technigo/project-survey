import React from "react"
import "./progressbar.css"

export const ProgressBar = (props) => {
    const { width } = props
    return (
        <div className="empty-bar">
            <div className="filled-bar" style={{ width: `${width * 33.3}` + '%' }} ></div>
        </div>

    )
}