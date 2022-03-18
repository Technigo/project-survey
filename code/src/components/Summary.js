import React from "react";


export const Summary=({nameInput, interestInput, locationInput})=>{
    return( <section>

        <h1> Thank you {nameInput}!!</h1>
        <h2> We will send you updates about {interestInput} in {locationInput}</h2>
        </section>)
  
}