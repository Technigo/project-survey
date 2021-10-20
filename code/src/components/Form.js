import React, { useState } from "react"

import WhatConnection from "./questions/WhatConnection"
import LikeHeader from "./questions/LikeHeader"
import CanRecommend from "./questions/CanRecommend"
import LikeColor from "./questions/LikeColor"
import LikeText from "./questions/LikeText"
import Suggestions from "./questions/Suggestions"
import Summary from "./Summary"

const Form = () => {
  const [role, setRole] = useState('')
  const [visualAppearance, setVisualAppearance] = useState(0)
  const [color, setColor] = useState()
  const [text, setText] = useState()
  const [recommend, setRecommend] = useState(0)
  const [improve, setImprove] = useState('')
  
  return (
    <>
      <WhatConnection 
        role={role}
        setRole={setRole}
      />
      <LikeHeader
        visualAppearance={visualAppearance}
        setVisualAppearance={setVisualAppearance}
      /> 
      <LikeColor
        color={color}
        setColor={setColor}
      />  
      <LikeText
        text={text}
        setText={setText}
      />
      <CanRecommend
        recommend={recommend}
        setRecommend={setRecommend}
       /> 
      <Suggestions
        improve={improve}
        setImprove={setImprove}
      />
      <Summary 
        role={role}
        visualAppearance={visualAppearance}
        color={color}
        text={text}
        recommend={recommend}
        improve={improve}
      />  
    </>  
  )
}

export default Form