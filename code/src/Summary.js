import React from "react";

export const Summary = ({ name , setName ,  password , setPassword, radio, setRadio, select, setSelect }) => {
    return ( 
     <section className ="summary-wrapper"> 
    <p>hello {name} </p>   
    <p>your password is {password}</p> 
    <p> Your age is: {radio} </p>
    <p>Your city is : {select}</p>

    </section> 
    )
}