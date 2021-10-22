import React from 'react';
import './overview.css'
const Overview = ({ nameInput, surnameInput, weakness, strength }) => {
    return(
        <section className="summary">
        <div class="underline-values">
        <h1 className="values">My values from Form</h1>
        </div>
        <p className="name"><span className="highlightme">Name</span> : {nameInput}</p>
        <p className="surname"><span className="highlightme">Surname</span> : {surnameInput}</p>
        <p className="your-weakness">You believe your <span className="highlightme">weakness</span> is {weakness}</p>
        <p className="your-strength">You believe your <span className="highlightme">strength</span> is {strength} </p>
        </section>

    );
};

export default Overview;