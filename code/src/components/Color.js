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
      <form className="favouriteColor" id="color-selector">
        <button
          className="pink"
          type="button"
          onClick={handleColorChange}
          value="pink"
          aria-label="Select Pink color"
          title="Select Pink color">
          <p>Pink</p>
        </button>
        <button
          className="green"
          type="button"
          onClick={handleColorChange}
          value="green"
          aria-label="Select Green color"
          title="Select Green color">
          <p>Green</p>
        </button>
        <button
          className="black"
          type="button"
          onClick={handleColorChange}
          value="black"
          aria-label="Select Black color"
          title="Select Black color">
          <p>Black</p>
        </button>
        <button
          className="brown"
          type="button"
          onClick={handleColorChange}
          value="brown"
          aria-label="Select Brown color"
          title="Select Brown color">
          <p>Brown</p>
        </button>
      </form>

    </div>
  );
}

// what should I have as a value to get the if statements right?
