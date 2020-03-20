import React, { useState } from 'react'
import './summary.css'
import summaryImage from './summaryImage.png'

export const Summary = ({name, paper, place}) => {


  return (
    <section className="summary">
      <div className="text-response">
        <h3>Hey {name}! </h3><h2>Please leave some {paper} in the {place} for others in need!</h2>
      </div>
      <div className="image-background">
        <img src={summaryImage} alt="toilet roll" />
      </div>
    </section>
  )

}