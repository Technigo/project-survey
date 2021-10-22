import React from "react";
import "./overview.css"

const Overview = ({ 
    nameInput, 
    ageInput, 
    style, 
    costume, 
    mood,
    onRebootChange}) => {

	return (
    <section className="summeryBox"> 
        <h1>Hi {nameInput}!</h1>
        <p>You are {ageInput} years old and want to dress up as a {style} {costume}. When you hear the sound of bats and ghost at Halloween, you are in the mood for {mood === 'blood' ? 'fresh blood' : 'a bag full of candy'}.</p>
        <button onClick={onRebootChange}>Again!</button>
    </section>
    
);
};


export default Overview;