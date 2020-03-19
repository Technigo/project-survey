import React from "react";


export const Summary = ({ name, myChoice, rating, newsLetter }) => (<section>
  <h1>Hey {name}!</h1>

  <h2>{newsLetter && <p>You want news</p>}</h2>
  
  <h2>{rating}</h2>

  <h2>{myChoice}</h2>

</section>)

