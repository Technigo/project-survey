import React from 'react';

const icon = "./assets/undraw_develop_app_re_bi4i.svg"

export const Summary = ({ summary }) => {
    console.log(summary);
    return (
        <>
            <div className="form">
                <h4>Hey {summary.name}!</h4>
                <p>You want to work in {summary.location}, great choice that's a beautiful place ☀️</p>
                <p>{summary.radio} is a super interesting field of work, I'm sure you're gonna love it!</p>
                <p>These are your preferred languages: {summary.selectedStacks}</p>
                <img src={icon}/>
            </div>
        </>
    )
}