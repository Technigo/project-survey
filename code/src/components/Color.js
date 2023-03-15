import React from 'react'

export const Color = ({ color, setColor }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
  }
  return (
    <div>

      <section className="favouriteColor">
        <h2>What´s your favourite color ?</h2>
        <form>
          <input className="pink" type="button" onClick={handleColorChange} value={color} />
          <input className="green" type="button" onClick={handleColorChange} value={color} />
          <input className="black" type="button" onClick={handleColorChange} value={color} />
          <input className="brown" type="button" onClick={handleColorChange} value={color} />
        </form>
      </section>
    </div>
  );
}

// what should I have as a value to get the if statements right?
/* <button className="pink" type="button" onClick={handleColorChange} value={color}> Pink </button>
          <button className="green" type="button"
          onClick={handleColorChange} value={color}> Green </button>
          <button className="black" type="button"
          onClick={handleColorChange} value={color}> Black </button>
          <button className="brown" type="button"
          onClick={handleColorChange} value={color}> Brown </button> */