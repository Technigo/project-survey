import React from 'react'
import './Result.css'

const Result = ({snack, GenreGroup, name}) => {
    return (
        <div className="form-result">
            <h2 className="result-header">Get cozy!</h2>
                <p className="result-text">Put your your favorite pyjamas on and invite <span>{name}</span> for a movie night <span>💝</span>you can watch a <span>{GenreGroup}</span>, whilst snacking on some <span>{snack}</span></p>
                <img className="robot-image"src="./assets/robot.png"/>
        </div>
    )
}

export default Result