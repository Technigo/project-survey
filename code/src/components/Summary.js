import React, { useState } from 'react'
import './summary.css'

export const Summary = ({name, color}) => {

  return (
    <section className="background">
      <h1>Hey {name} in {color}!</h1>
    </section>
  )

}