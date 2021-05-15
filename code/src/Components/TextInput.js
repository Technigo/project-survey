import React from 'react'

const TextInput = (props) => {
  console.log(props.backstoryAspect)
  return (
    <form className="text-input-wrapper">
      <textarea
        type="text"
        placeholder={`//example: ${props.placeholder}`}
        value={props.backstoryAspect.value}
        onChange={event => props.onChange(props.backstoryAspect, event.target.value)}
      >

      </textarea>
    </form>
  )
}

export default TextInput;