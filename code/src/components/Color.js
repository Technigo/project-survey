import React from 'react'

export const Color = ({ color, setColor, counterFromApp, setCounter }) => {
  const handleColorChange = (event) => {
    setColor(event.target.value);
    setCounter(counterFromApp + 1);
    console.log('Color picked: ', event.target.value);
  }
  console.log(color)
  return (
    <div className="color">
      <h2>What´s your favourite color ?</h2>

      <section className="favouriteColor">
        <button
          className="pink"
          type="button"
          onClick={handleColorChange}
          value="pink"> Pink
        </button>
        <button
          className="green"
          type="button"
          onClick={handleColorChange}
          value="green"> Green
        </button>
        <button
          className="black"
          type="button"
          onClick={handleColorChange}
          value="black"> Black
        </button>
        <button
          className="brown"
          type="button"
          onClick={handleColorChange}
          value="brown"> Brown
        </button>
      </section>
    </div>
  );
}

// what should I have as a value to get the if statements right?
