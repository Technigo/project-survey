import React, { useState } from 'react'
import data from './data.json'
import Select from './Select/Select'
import Radio from './Radio/Radio'
import Text from './Text/Text'
import Welcome from './Welcome/Welcome'
import Summary from './Summary/Summary'

const Survey = () => {
  const [siteIndex, setSiteIndex] = useState(-1)

  const [answers, setAnswers] = useState([])

  const nextSiteHandler = () => {
    setSiteIndex((previndex) => (previndex + 1))
  }

  const addAnswerHandler = (userAnswer) => {
    setAnswers((prevAnswers) => [...prevAnswers, userAnswer])
    nextSiteHandler()
  }

  // eslint-disable-next-line array-callback-return
  const questions = data.map((element, index) => {
    const key = `${index}option`
    if (element.inputType === 'Text') {
      return (
        <div key={key}>
          {siteIndex === index && <Text
            object={element}
            onAddAnswer={addAnswerHandler} />}
        </div>
      )
    }
    if (element.inputType === 'Select') {
      return (
        <div key={key}>
          {siteIndex === index && <Select
            object={element}
            onAddAnswer={addAnswerHandler} />}
        </div>
      )
    }
    if (element.inputType === 'Radio') {
      return (
        <div key={key}>
          {siteIndex === index && <Radio
            object={element}
            onAddAnswer={addAnswerHandler} />}
        </div>
      )
    }
  })

  return (
    <div>
      {
        siteIndex === -1 && <Welcome onNextSite={nextSiteHandler} />
      }
      {questions}
      {
        siteIndex === questions.length && <Summary answers={answers} />
      }
    </div>
  )
}

export default Survey