import React, { useState } from "react"

import Connection from "./questions/Connection"
import VisualAppearance from "./questions/VisualAppearance"
import Color from "./questions/Color"
import Text from "./questions/Text"
import Recommend from "./questions/Recommend"
import Improve from "./questions/Improve"

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
      <Connection
        role={role}
        setRole={setRole}
      />
      <VisualAppearance
        visualAppearance={visualAppearance}
        setVisualAppearance={setVisualAppearance}
      />    
      <Color
        color={color}
        setColor={setColor}
        yesNo={yesNo}
      />  
      <Text
        text={text}
        setText={setText}
        yesNo={yesNo}
      />  
      <Recommend
        recommend={recommend}
        setRecommend={setRecommend}
      />  
      <Improve
        improve={improve}
        setImprove={setImprove}
      />  
    </>  
  )
}

export default Form