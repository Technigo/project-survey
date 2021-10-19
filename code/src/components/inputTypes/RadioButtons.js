import React from "react"

const RadioButtons = ({value, setValue, valueArray}) => {
  return (
    <form onSubmit= {event => event.preventDefault()}>
        {valueArray.map((item) => (
          <label key={item}>
            <input
              type="radio"
              value={item}
              onChange = {event => setValue(event.target.value)}
              checked={value === item}
            />
            {item}
          </label>     
        ))}   
      </form>
  )
}

export default RadioButtons