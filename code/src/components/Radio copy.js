import React, { useState } from 'react'

import Image from './Image'


const suitColors = ["Jacket: Marine Blue", "Jacket: Blue", "Jacket: Green", "Jacket: Gray", "Jacket: Red", "Jacket: Lightblue"]

const Radio = () => {
  const [Color, setColor] = useState();
  const images = ["./assets/jacket1.jpg", "./assets/jacket2.jpg", "./assets/jacket3.jpg", "./assets/jacket4.jpg", "./assets/jacket5.jpg", "./assets/jacket6.jpg"]

  return (
    <label >
      <p>Select one suit:</p>


      <div className="group-container">
      {suitColors.map((group, imageIndex) => (
        <label key={group} >
          <div className="box-header">
          <div className="box">
          <div><Image image={images[imageIndex]} /></div>
          <div className="container">
            <input
            type="radio"
            value={group}
            onChange={event => setColor(event.target.value)} // Du kan gära onChange ={SetColor}
            checked={Color === group}
            name="Selected jacket"
            className="my-input"
            required

          />
          <span className="radio-paragraf">{group}</span> </div>
          </div>
          </div>
          
        </label>
      ))}
      </div>
      <div className="next-btn-container">
        <ul className="next-btn">
          <a href='#size'><span className="link-btn">Click to scroll to Personal details</span></a> 
        </ul>
        
 
      </div>
    </label>
  )
}

// Du ska ta bort group på rad 24 ifall du vill ta bort att texten bredvbid inputen ska försvinna.
// Se också tiill att inputen försvinner så att man endast väljer bild

export default Radio