import React from "react";
import './summary.css'


export const Summary = ({ name, myChoice, rating, newsLetter }) => (<section>
  <h1>Hey {name}!</h1>
  
  <h2>It seems like you {rating} that today is going well for you..</h2>

  <h2>I will find {myChoice} for you!</h2>

  <h2>{newsLetter && <a href="https://reactjs.org/" ><p>You can learn more about React here </p></a>}</h2>

  <img src="heart.svg" class="heart"/>

</section>)

