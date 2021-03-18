import React from 'react'
import './Result.css'

const Result = ({snack, GenreGroup, name}) => {
    return (
        <div className="form-result">
            <h2 className="result-header">Turn your cozy mood on</h2>
                <p className="result-text">Get your blanket ready and invite <span>{name}</span> for a virtual movie night you can watch a <span>{GenreGroup}</span>, whilst snacking on some <span>{snack}</span></p>
                <img className="robot-image"src="./assets/robot.png"/>
        </div>
    )
}

export default Result