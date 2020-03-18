import React, { useState } from 'react'
import './summary.css'

export const Summary = ({name, color, city}) => {

  return (
    <section className="background">
      <h1>Hey {name} in {color}{city}!</h1>
    </section>
  )

}