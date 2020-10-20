import React from "react";

export const Summary = ({ name , setName , ageGroup, setAgeGroup, location, setLocation }) => {
    return ( 
     <section className ="summary-wrapper"> 
    <p> You want to name your cat: {name} </p>   
    <p> You preffer a cat that is a {ageGroup}  </p>
    <p> You want a cat with {location} fur! </p>
    </section> 
    )
}