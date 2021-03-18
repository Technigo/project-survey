import React from 'react';

const icon = "./assets/undraw_develop_app_re_bi4i.svg"

export const Summary = ({ summary }) => {
    console.log(summary);
    return (
        <>
            <div className="form" tabindex="0">
                <h4 tabindex="0">Hey {summary.name}!</h4>
                <p tabindex="0">You want to work in {summary.location}, great choice that's a beautiful place ☀️</p>
                <p tabindex="0">{summary.radio} is a super interesting field of work, I'm sure you're gonna love it!</p>
                <p tabindex="0">These are your preferred languages: {summary.selectedStacks}</p>
                <img tabindex="0" alt="icon" src={icon}/>
            </div>
        </>
    )
}