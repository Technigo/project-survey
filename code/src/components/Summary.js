import React, { useState } from 'react'
import './summary.css'
import summaryImage from './summaryImage.png'

export const Summary = ({name, paper, place}) => {


  return (
    <section className="summary">
      <h2>Hey {name}! Please leave some {paper} in the {place} for others in need!</h2>
      <img src={summaryImage} alt="toilet roll" />
    </section>
  )

}