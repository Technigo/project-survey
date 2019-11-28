import React, { useState } from 'react'
import { Header } from './components/Header'
import { Form } from './components/Form'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Radiobutton } from './components/Radiobutton'
import { SurveySection } from './components/SurveySection'
import { Select } from './components/Select'
import { SelectOption } from './components/SelectOption'
import { Summary } from 'components/Summary'

const boardgames = [
  "Select game",
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
  const [game, setGame] = useState("Select game")
  const [preferredGameDay, setPreferredGameDay] = useState()
  const [preferredWeekend, setPreferredWeekend] = useState()
  return (
    < div >
      <Header
        title="Game night"
        description="Give your input about our game nights."
        buttonText="Take the survey"
        url="#question-1" />
      <Form>
        <SurveySection
          id="question-1"
          title="What game would you like to play?"
          description="Choose the game you would like to play the most">
          <Select
            onChange={(event) => setGame(event.target.value)}
            value={game}>
            {boardgames.map(boardgame => {
              return (
                <SelectOption
                  key={boardgame}
                  value={boardgame}
                  option={boardgame}
                />
              )
            })}
          </Select>
        </SurveySection>
        <SurveySection
          id="question-2"
          title="Which day would you prefer to play?"
          description="Weekends only."
        >
          <div className="radiobuttons">
            {gamedays.map(gameday => {
              return (
                <Radiobutton
                  key={gameday}
                  label={gameday}
                  name={gameday}
                  value={gameday}
                  onChange={event => setPreferredGameDay(event.target.value)}
                  checked={preferredGameDay === gameday} />
              )
            })}
          </div>
        </SurveySection>
        <SurveySection
          id="question-3"
          title="Which weekend during the month do you want to play?"
          description="Choose one">
          <div className="radiobuttons">
            {weekendNumbers.map(weekendNumber => {
              return (
                <Radiobutton
                  key={weekendNumber}
                  label={weekendNumber}
                  name={weekendNumber}
                  value={weekendNumber}
                  onChange={event => setPreferredWeekend(event.target.value)}
                  checked={preferredWeekend === weekendNumber} />
              )
            })}
          </div>
        </SurveySection>
        <SurveySection
          title="Submit your answers"
          description="Thank you for answering this survey!">
          <Button text="Submit survey" />
        </SurveySection>
      </Form>
      <Summary
        title="Summary"
        boardgame={game}
        howOften={preferredWeekend}
        weekday={preferredGameDay}
      />
    </div >
  )
}
