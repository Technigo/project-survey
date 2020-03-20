import React from "react"


export const Summary = (props) => {
  const { whichSong, name, type } = props

  return (
    <section className="survey-summary">
      <h3>When you wash your hands you sing {whichSong} while you use {name} in {type} form.</h3>
    </section>
  )
}
