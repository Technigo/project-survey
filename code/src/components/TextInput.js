import React from "react"

const TextInput = ({ text, setText, data}) => {

  const handleInput = (event) => {
    setText(event.target.value)
  }

  return (
    <div className="input-container">
      <label htmlFor="text">
        <h2>{data.label}</h2>
      </label>
      <input
        id="text"
        type="text"
        className={data.className}
        value={text}
        onChange={handleInput}
      />
    </div>
  )
}

export default TextInput