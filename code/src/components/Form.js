import React, { useState } from "react"

import SelectDropdown from "./inputTypes/SelectDropdown"
import RangeSlider from "./inputTypes/RangeSlider"
import RadioButtons from "./inputTypes/RadioButtons"
import TextField from "./inputTypes/TextField"


const roles = [
  {value: 'teacher', description: 'Codecoach'},
  {value: 'student', description: 'Fellow student'},
  {value: 'recruiter', description: 'Recruiter'},
  {value: 'friend', description: 'Friend'},
  {value: 'other', description: 'Other'}
]

const Form = () => {
  const [role, setRole] = useState('')
  const [visualAppearance, setVisualAppearance] = useState(0)
  const [color, setColor] = useState()
  const [text, setText] = useState()
  const [recommend, setRecommend] = useState(0)
  const [improve, setImprove] = useState('')
  

  return (
    <>
      <p>What's your connection to Birgit?</p>
      <SelectDropdown
        optionValue={role}
        setOptionValue={setRole}
        valueArray={roles}
      />
      <p>How visually appealing is the header section to you?</p>
      <RangeSlider
        value={visualAppearance}
        setValue={setVisualAppearance}
        min={1}
        max={5}
      />   
      <p>Do you like the color scheme?</p> 
      <RadioButtons
        value={color}
        setValue={setColor}
        valueArray={['yes', 'no']}
      /> 
      <p>What about the presentation text? Does it provide good information?</p> 
      <RadioButtons
        value={text}
        setValue={setText}
        valueArray={['yes', 'no']}
      />
      <p>How likely is it, that you would recommend the portfolio to a friend or colleague?</p>  
      <RangeSlider
        value={recommend}
        setValue={setRecommend}
        min={1}
        max={5}
      />
      <p>How can the portfolio be improved?</p>  
      <TextField
        value={improve}
        setValue={setImprove}
      />  
    </>  
  )
}

export default Form