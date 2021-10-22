import React from 'react';
import './overview.css'
const Overview = ({ nameInput, surnameInput, weakness, strength }) => {
    return(
        <form className="summary">
        <div class="underline-values">
        <h1 className="values">Your values from Form</h1>
        </div>
        <p className="name"><span className="highlightme">Name</span> : {nameInput}</p>
        <p className="surname"><span className="highlightme">Surname</span> : {surnameInput}</p>
        <p className="your-weakness">You believe your <span className="highlightme">weakness</span> is {weakness}</p>
        <p className="your-strength">You believe your <span className="highlightme">strength</span> is {strength} </p>
        <div className="encourage">
        <h3>Don't let this discourage you, work on your weaknesses and perfect your strengths, we have a long road ahead of us and we will all reach our goal togheter!</h3>
        </div>
        </form>

    );
};

export default Overview;