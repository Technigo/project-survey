import React from "react";


export const Summary = ({ name, myChoice, rating, newsLetter }) => (<section>
  <h1>Hey {name}!</h1>
  
  <h2>It seems like you {rating} that today is going well for you..</h2>

  <h2>If you decide you prefere to {myChoice}</h2>

  <h2>{newsLetter && <p>You want news</p>}</h2>

</section>)

