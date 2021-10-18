import React, { useState } from "react"

const yesNo = ['yes', 'no']

const Form = () => {
  const [role, setRole] = useState('')
  const [visualAppearance, setVisualAppearance] = useState(0)
  const [color, setColor] = useState()
  const [text, setText] = useState()
  const [recommend, setRecommend] = useState(0)
  const [improve, setImprove] = useState('')
  

  return (
    <>
      <form onSubmit= {event => event.preventDefault()}>
        <p>What's your connection to Birgit?</p>
        <select
          onChange= {event => setRole(event.target.value)}
          value= {role}
        >
          <option disabled value="">Select an option: </option>
          <option value="teacher">CodeCoach</option>
          <option value="student">Fellow Student</option>
          <option value="recruiter">Recruiter</option>
          <option value="friend">Friend</option>
          <option value="other">Other</option>
        </select>
      </form>

      <form onSubmit= {event => event.preventDefault()}>
        <p>How visually appealing is the header section to you?</p>
        <input
          type="range"
          onChange= {event => setVisualAppearance(event.target.value)}
          value= {visualAppearance}
          min="1" 
          max="5"
        />  
      </form>

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

      <form onSubmit= {event => event.preventDefault()}>
        <p>What about the presentation text? Does it provide the right amount of information?</p>
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

      <form onSubmit= {event => event.preventDefault()}>
        <p>How likely is it, that you would recommend the portfolio to a friend or colleague?</p>
        <input
          type="range"
          onChange= {event => setRecommend(event.target.value)}
          value= {recommend}
          min="1" 
          max="5"
        />  
      </form>

      <form onSubmit= {event => event.preventDefault()}>
        <p>How can the portfolio be improved?</p>
        <input
          type="text"
          onChange= {event => setImprove(event.target.value)}
          value= {improve}
        />  
      </form>
    </>
  )
}

export default Form