import React from 'react';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'pink',
  'black',
  'white',
]

const ColorQuestion = (props) => {

  const {color, setColor} = props;
  const onColorChange = (event) => {
    console.log(`Color: ${event.target.value}`)
    setColor(event.target.value);
  }
  return (
    <>
      <p>My favourite colour is: </p>
      {colors.map((shade) => (
        <div>
          <label key={shade} htmlFor="color">
          </label>
          <input
            id="color"
            type="radio"
            name="colorButton"
            value={shade}
            onChange={onColorChange}
            checked={color === shade}
            />
        {shade}
        </div>
        
      ))}
      
    </>

  )
}

export default ColorQuestion;