import React from "react";


export const Summary = ({ name, myChoice, rating, newsLetter }) => (<section>
  <h1>Hey {name}!</h1>

  <h2>{myChoice}</h2>
  
  <h2>{rating}</h2>

  <h2>{newsLetter}</h2>
  
</section>)

