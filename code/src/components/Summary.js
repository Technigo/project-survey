import React from "react";

const Summary = ({ nameInput, flavourInput, sizeInput }) => {
    return (

        <section>
            <h2>Thank you for using our macaron service! Here is a summary of the information you have provided us:</h2>   
            <p>Your name: {nameInput}</p>
            <p>Based on your preferences, we will create a{flavourInput} flavoured box consisting of {sizeInput} macarons. ENJOY!!!</p>

            </section>
        
    );
};

export default Summary;