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
          title="Select Pink color" />

        <button
          className="black"
          type="button"
          onClick={handleColorChange}
          value="black"
          aria-label="Select Black color"
          title="Select Black color" />

      </form>

    </div>
  );
}

// what should I have as a value to get the if statements right?
