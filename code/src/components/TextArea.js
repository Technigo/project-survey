import React from "react"

const TextArea = ({ text, setText, data}) => {

  const handleInput = (event) => {
    setText(event.target.value)
  }

  return (
    <div className="text-area-container">
      <label htmlFor="text">
        <h2>{data.label} <span className="not-required">(not required)</span></h2>
      </label>
      <textarea
        id="text"
        type="text"
        className={data.className}
        value={text}
        onChange={handleInput}
        rows="4"
        cols="35"
      >
        Anything other you want us to know?
      </textarea>
    </div>
  )
}

export default TextArea