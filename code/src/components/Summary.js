
import React from "react";


export const Summary = ({place, genre, description }) => {

  const handleRestart = () => {
    window.location.reload(false);
  }

  return (
  
    <section className="summaryDisplay">
    
    <div className="micIcon"></div>
    <article className="summaryBox">

    <h1>Go sing {place} already...</h1>

    <h1> Your favorite genre is: {genre}</h1>
    <h1> Your favorite song is: {description}</h1>

    <button className="submitButton" onClick={handleRestart}><p>Restart</p></button>
    </article>
    </section>

  )
}
