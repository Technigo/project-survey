import React, {useState} from 'react';

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

const ColorQuestion = () => {

  const [color, setColor] = useState('');
  return (
    <>
      <p>My favourite colour is: </p>
      {colors.map((shade) => (
        <div>
          <label key={shade} for="color">
          </label>
          <input
            id="color"
            type="radio"
            name="colorButton"
            value={shade}
            onChange={event => setColor(event.target.value)}
            checked={color === shade}
            />
        {shade}
        </div>
        
      ))}
      
    </>

  )
}

export default ColorQuestion;