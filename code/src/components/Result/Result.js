import React from 'react'
import './Result.css'

const showMovieName = (GenreGroup) =>{
    let imgGenre;

    switch (GenreGroup) {
        case 'Thriller':
            imgGenre = "Scilence of the lamb";
            break;
        case 'Comedy':
            imgGenre = "Notting hill";
            break;
        case'Drama':
            imgGenre = "Titanic";
            break;
        case'Sci-fi':
            imgGenre = "Aliens";
            break;
        case'Animated':
            imgGenre = "The lion king";
            break;
        default:
        break;
    }
        return <p>{imgGenre}</p>
}

const Result = ({snack, GenreGroup, name}) => {

    return (
        <div className="form-result">
            <h2 tabindex="0" className="result-header">Get cozy!</h2>
                <p tabindex="0" className="result-text">Put your your favorite pyjamas on and invite <span>{name}</span> for a movie night <span>💝</span>you can watch a <span>{GenreGroup}</span>, whilst snacking on some <span>{snack}</span></p>
                <div className="robot-generator">
                    <p tabindex="0" className="robot-text">Movie robot suggest you watch</p>
                    <p tabindex="0"><span>{showMovieName(GenreGroup)}</span></p>
                    <img src='./assets/robot.png' className="robot-image" alt="robot-image"/> 
                 </div>         
        </div>
    )
}

export default Result