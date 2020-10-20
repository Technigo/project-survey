import React from "react";

export const Summary = ({ name , setName ,  password , setPassword, ageGroup, setAgeGroup, location, setLocation }) => {
    return ( 
     <section className ="summary-wrapper"> 
    <p>hello {name} </p>   
    <p>your password is {password}</p> 
    <p> Your age is: {ageGroup} </p>
    <p>Your city is : {location}</p>

    </section> 
    )
}