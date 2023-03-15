import React from 'react'

const shapes = ['rectangle', 'cylinder', 'hexagon', 'cube']

export const Aquarium = ({ shape, setShape }) => {
  const handleShape = (event) => {
    setShape(event.target.value)
  }

  return (
    <form>
        Aquarium shape:
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
  )
}