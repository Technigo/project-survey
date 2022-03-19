import React from "react";

const Header = () => {
    return (
    <div className="header-container">
        <header>
            <h1> Hello!</h1>
            <h2>Welcome to GRACE Magazine.</h2> 
            <h2>We make headlines for and about people over 65!</h2>
            <p>GRACE Magazine looks to all people over 65 that are tired of only reading about the latest sewing pattern and hearing aids. </p>
            <p className="header-small-text">Sign up for an order of 3, 6 or 12 issues and get a gift just by doing so.</p>
        </header>
        
        <div className="button-container">
        <button className="start-button">
            <p>OK!</p> 
        <p>I can still read let's go!</p>
        </button>
        </div>
    </div>
    )}

export default Header