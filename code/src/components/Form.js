import React, { useState } from "react"

import WhatConnection from "./questions/WhatConnection"
import LikeHeader from "./questions/LikeHeader"
import CanRecommend from "./questions/CanRecommend"
import LikeColor from "./questions/LikeColor"
import LikeText from "./questions/LikeText"
import Suggestions from "./questions/Suggestions"
import Summary from "./Summary"
import MoreToAdd from "./questions/MoreToAdd"

const Form = () => {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState('')
  const [visualAppearance, setVisualAppearance] = useState(0)
  const [color, setColor] = useState()
  const [text, setText] = useState()
  const [recommend, setRecommend] = useState(0)
  const [improve, setImprove] = useState('')
  const [moreColor, setMoreColor] = useState('')

  const onStepChange = () => {
    setStep(step + 1)
  }
  
  
  return (
    <>
      {step === 1 && (
        <WhatConnection 
        role={role}
        setRole={setRole}
        onStepChange={onStepChange}
      />
      )}
      {step === 2 && (
        <LikeHeader
        visualAppearance={visualAppearance}
        setVisualAppearance={setVisualAppearance}
        onStepChange={onStepChange}
      /> 
      )}
      {step === 3 && (
        <LikeColor
        color={color}
        setColor={setColor}
        onStepChange={onStepChange}
      /> 
      )}
      {step === 4 && (
        <>
          {color === 'no' ? 
          <MoreToAdd
            moreColor={moreColor}
            setMoreColor={setMoreColor}
            onStepChange={onStepChange}
          /> : 
          <LikeText
            text={text}
            setText={setText}
            onStepChange={onStepChange}
          />}
        </>
        )}
      {step === 5 && (
        <CanRecommend
        recommend={recommend}
        setRecommend={setRecommend}
        onStepChange={onStepChange}
       /> 
      )}
      {step === 6 && (
        <Suggestions
        improve={improve}
        setImprove={setImprove}
        onStepChange={onStepChange}
      />
      )}
      {step === 7 && (
        <Summary 
        role={role}
        visualAppearance={visualAppearance}
        color={color}
        text={text}
        recommend={recommend}
        improve={improve}
      /> 
      )}
    </>  
  )
}

export default Form