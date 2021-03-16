import React from 'react'

const Dropdown = (props) => {

  const onColorChange = (event) => {
    props.setColor(event.target.value)
  }

  return (
    <>
      <label>Please select your favourite color
        <select
          onChange={onColorChange}
          value={props.color}
        >
          <option value="pink">Pink</option>
          <option value="purple">Purple</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>
      </label>
    </>
  )
}

export default Dropdown