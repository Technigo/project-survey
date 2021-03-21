import React, { useState } from 'react'

import Image from './Image'

const suitColors = ["Jacket: Marine Blue", "Jacket: Blue", "Jacket: Green", "Jacket: Gray", "Jacket: Red", "Jacket: Lightblue"]

const Radio = ({colorSelected, IselectColor}) => {
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
                  onChange={e => IselectColor(e)} // Du kan gära onChange ={SetColor}
                  checked={colorSelected === group}
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

export default Radio