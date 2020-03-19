
import React from "react";


export const Summary = ({place, genre, description }) => {


  return (
  
    <section className="summaryDisplay">
    
   
    <article className="summaryBox">

    <h1>Go sing {place} already...</h1>

    <h1> Your favorite genre is: {genre}</h1>
    <h1> Your favorite song is: {description}</h1>



    <button className="submitButton" type="submit"><p>Submit</p></button>
    </article>
    </section>

  )
}
