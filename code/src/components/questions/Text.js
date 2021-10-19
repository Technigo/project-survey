import React from "react"

const Text = ({text, setText, yesNo}) => {
  return (
    <form onSubmit= {event => event.preventDefault()}>
        <p>What about the presentation text? Does it provide good information?</p>
        {yesNo.map((item) => (
          <label key={item}>
            <input
              type="radio"
              value={item}
              onChange = {event => setText(event.target.value)}
              checked={text === item}
            />
            {item}
          </label>     
        ))}   
      </form>
  )
}

export default Text