import React from "react";

const Summary = ({nameInput, whereInput, snacksInput, drinksInput, onRestartChange}) =>{
    return (
        <section className="container">
            <h1>Hi {nameInput}!</h1>
            <p>You like to watch movies at {whereInput}, eating {snacksInput} and drinking {drinksInput}. </p>
            
        </section>
    );
};

export default Summary;