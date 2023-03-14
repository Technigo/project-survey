import React from 'react'

export const Color = ({ color, setColor }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
  }
  return (
    <div>

      <section className="favouriteColor">
        <h2>What´s your favourite color?</h2>

        <button className="pink" type="button" onClick={handleColorChange} value={color}> Pink </button>
        <button className="green" type="button" onClick={handleColorChange} value={color}> Green </button>
        <button className="black" type="button" onClick={handleColorChange} value={color}> Black </button>
        <button className="brown" type="button" onClick={handleColorChange} value={color}> Brown </button>

      </section>
    </div>
  )
}