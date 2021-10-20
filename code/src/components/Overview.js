import React from "react";

const Overview = ({ nameInput, ageInput, style, costume, mood, }) => {
	return (
    <section> 
    <h1>Hi {nameInput}!</h1>
    <p>You are {ageInput} years old and want to dress up as a {style} {costume}.</p>
    <p>When you hear the sound of bats and ghost at Halloween, you are in the mood for {mood === 'blood' ? 'fresh blood' : 'a bag full of candy'}.</p>
    </section>
);
};


export default Overview;