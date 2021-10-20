import React from "react";

const Overview = ({ nameInput, surnameInput, happiness, flavour, }) => {
	return (
    <section> 
    <h1>See my overview</h1>
    <p>Name: {nameInput}</p>
    <p>Surname: {surnameInput}</p>
    <p>You are feeling {happiness === 'happy' ? 'super happy' : 'a bit sad'} today </p>
    <p>You want to have {flavour} popcorn</p>
    </section>
);
};


export default Overview;