import React, { useState } from 'react'
import './summary.css'

export const Summary = ({name, color, animal}) => {

  return (
    <section className="background">
      <h1>Hey {name} in {color}{animal}!</h1>
    </section>
  )

}