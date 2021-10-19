import React from "react"

const Color = ({color, setColor, yesNo}) => {
  return (
    <form onSubmit= {event => event.preventDefault()}>
        <p>Do you like the color scheme?</p>
        {yesNo.map((item) => (
          <label key={item}>
            <input
              type="radio"
              value={item}
              onChange = {event => setColor(event.target.value)}
              checked={color === item}
            />
            {item}
          </label>     
        ))}   
      </form>
  )
}

export default Color