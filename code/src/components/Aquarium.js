import React from 'react'
import '../index.css';

const shapes = ['rectangle', 'cylinder', 'hexagon', 'cube']

export const Aquarium = ({ shape, setShape }) => {
  const handleShape = (event) => {
    setShape(event.target.value)
  }

  return (
    <div>
      <p>What shape does your aquarium have?</p>
      <form className="input-form">
        {shapes.map((singleShape) => (
          <label
            htmlFor="shape"
            key={singleShape}>
            <input
              type="radio"
              value={singleShape}
              onChange={handleShape}
              checked={shape === singleShape} />
            {singleShape}
          </label>
        ))}
      </form>
    </div>
  )
}