import React, { useState } from 'react'
import { Radio } from './Radio'
import { Summary } from './Summary'
import { NameQuestion } from './NameQuestion'
import { OriginQuestion } from './OriginQuestion'
import { SubscriptionQuestion } from './SubscriptionQuestion'
import { ColorQuestion } from './ColorQuestion'
import 'app.css'

export const App = () => {
  const [name, setName] = useState("you")
  const [location, setLocation] = useState("default")
  const [wanstNewsletter, setWantsNewsletter] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [ageGroup, setAgeGroup] = useState()
  const [color, setColor] = useState("default")

  const handleSubmit = event => {
    event.preventDefault()
    setShowSummary(true)
  }

  return (
    <div className="App">
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <NameQuestion name={name} setName={setName} />
          <OriginQuestion location={location} setLocation={setLocation} />
          <Radio ageGroup={ageGroup} setAgeGroup={setAgeGroup} />
          <ColorQuestion color={color} setColor={setColor} />
          <SubscriptionQuestion wanstNewsletter={wanstNewsletter} setWantsNewsletter={setWantsNewsletter} />
          <button type="submit" disabled={name === "you" || location === "default" || color === "default"}>submit</button>
        </form>) : (
          <Summary className="Summary" name={name} location={location} ageGroup={ageGroup} wanstNewsletter={wanstNewsletter} color={color} />
        )}
    </div>
  )
}
