import React from "react"

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <p className="name-progress">Name</p>
            <p className="class-progress">Class</p>
            <p className="race-progress">Race</p>
            <p className="goal-progress">Goal</p>
            <p className="age-progress">Age</p>
            <p className="family-progress">Family</p>
            <p className="stats-progress {props.progress}">Stats</p>
            <p>{props.progress}</p>
            <input
                list="tickmarks"
                type="range"
                min="0"
                max="7"
                value={props.progress}
            />
            <datalist id="tickmarks">
                <option value="0" label="first Question">first Question</option>
                <option value="1" label="1"></option>
                <option value="2" label="2"></option>
                <option value="3" label="3"></option>
                <option value="4" label="4"></option>
                <option value="5" label="5"></option>
                <option value="6" label="6"></option>
                <option value="7" label="7"></option>
            </datalist>
        </div>
    )
}

export default ProgressBar