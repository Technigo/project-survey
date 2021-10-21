import React, { useState } from "react"

import WhatConnection from "./questions/WhatConnection"
import LikeHeader from "./questions/LikeHeader"
import CanRecommend from "./questions/CanRecommend"
import LikeColor from "./questions/LikeColor"
import LikeText from "./questions/LikeText"
import Suggestions from "./questions/Suggestions"
import Summary from "./Summary"

const Form = () => {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState('')
  const [visualAppearance, setVisualAppearance] = useState(0)
  const [color, setColor] = useState('')
  const [text, setText] = useState('')
  const [recommend, setRecommend] = useState(0)
  const [improve, setImprove] = useState('')
  const [additional, setAdditional] = useState('')
  const [addText, setAddText] = useState('')

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
        additional={additional}
        setAdditional={setAdditional}
        onStepChange={onStepChange}
      /> 
      )}
      {step === 4 && (
        <LikeText
          text={text}
          setText={setText}
          addText={addText}
          setAddText={setAddText}
          onStepChange={onStepChange}
        />
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
        additional={additional}
        text={text}
        addText={addText}
        recommend={recommend}
        improve={improve}
      /> 
      )}
    </>  
  )
}

export default Form