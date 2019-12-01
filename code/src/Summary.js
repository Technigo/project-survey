import React from 'react';


export const Summary = (props) => {

    return (
        <div className="Summary">
            <h2>Thanks for your answers {props.name}!</h2>
            <p>Cool, you are up for {props.adventures} in {props.destinations}.</p>
            <p>The most important thing to you is {props.mostImportant}</p>
            <p>and you like to travel {props.companionGroup}.</p>
            <p>Have a great 2020 adventure {props.name}!</p>
        </div>
    )
}
