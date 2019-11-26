import React, { useState } from 'react'
import { Header } from './components/Header'
import { Button } from './components/Button'
import { CheckBoxes } from './components/CheckBoxes'
import { Radiobutton } from './components/Radiobutton'
import { SurveySection } from './components/SurveySection'

const boardgames = [
  "Dead of winter",
  "Shit happens",
  "Gloom",
  "Pandemic",
  "Elder Signs",
  "Betrayal Legacy"
]

const gamedays = [
  "Friday",
  "Saturday",
  "Sunday"
]

const weekendNumbers = [
  "1",
  "2",
  "3",
  "4"
]

export const App = () => {
  return (
    <div>
      <Header
        title="Game night"
        description="Give your input about our game nights."
        buttonText="Take the survey"
        url="#" />
      <SurveySection
        title="What games would you like to play"
        description="Choose one or more">
        <div className="checkboxes">
          {boardgames.map(boardgame => {
            return (
              <CheckBoxes key={boardgame} label={boardgame} name={boardgame} value={boardgame} />
            )
          })}
        </div>
      </SurveySection>
      <SurveySection
        title="Which days can you play?"
        description="Choose one or more"
      >
        <div className="radiobuttons">
          {gamedays.map(gameday => {
            return (
              <Radiobutton key={gameday} label={gameday} name={gameday} value={gameday} />
            )
          })}
        </div>
      </SurveySection>
      <SurveySection
        title="Which weekend during the month do you want to play?"
        description="Choose one">
        <div className="radiobuttons">
          {weekendNumbers.map(weekendNumber => {
            return (
              <Radiobutton key={weekendNumber} label={weekendNumber} name={weekendNumber} value={weekendNumber} />
            )
          })}
        </div>
      </SurveySection>
      <Button text="Submit survey" />
    </div>
  )
}
