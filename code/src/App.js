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
import { Image } from 'components/Image'

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


export const App = () => {
  const [game, setGame] = useState("Select game")
  const [preferredGameDay, setPreferredGameDay] = useState()
  const [videogameApproval, setvideogameApproval] = useState()
  const [showResult, setShowResult] = useState(false)
  const [question, setQuestion] = useState('begin')
  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }

  const handleContinueClick = () => {
    if (question === 'begin') {
      setQuestion('first')
    } else if (question === 'first') {
      setQuestion('second')
    } else if (question === 'second') {
      setQuestion('third')
    } else if (question === 'third') {
      setQuestion('end')
    }
  }

  return (
    < div >
      {question === "begin" && (
        <Header
          title="Game night"
          description="Give your input about our game nights."
          buttonText="Take the survey"
          setQuestion="begin">
          <Button type="button" text="Take the survey" onClick={handleContinueClick} className="start-button" />
        </Header>
      )}
      {
        showResult && (
          <Summary
            title="Summary"
            boardgame={game}
            weekday={preferredGameDay}
            approval={videogameApproval}>
            <Image src={require('./components/undraw-having-fun.svg')} alt="People having fun together." className="summary-image" />
          </Summary>
        )
      }
      {
        !showResult && question !== 'begin' && (
          <Form onSubmit={handleSubmit}>
            {question === 'first' && (
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
                <Image src={require('./components/undraw-playing.svg')} alt="Gaming" className="section-image" />
              </SurveySection>)}
            {question === 'second' && (
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
                <Image src={require('./components/undraw-events.svg')} alt="Gaming" className="section-image" />
              </SurveySection>)}
            {question === 'third' && (
              <SurveySection
                id="question-3"
                title="Would you like to play videogames on our game nights as well?"
                description="Choose one">
                <div className="checkbuttons">
                  <Checkbox
                    label="Yes"
                    name="Yes"
                    value="Yes"
                    onChange={event => setvideogameApproval(event.target.value)}
                    checked={videogameApproval === "Yes"} />
                </div>
                <Image src={require('./components/undraw-gaming.svg')} alt="Gaming" className="section-image" />
              </SurveySection>)}
            {question === 'end' && (
              <SurveySection
                title="Submit your answers"
                description="Thank you for answering this survey!">
                <Button type="submit" text="Submit survey" className="default-button submit-button" />
              </SurveySection>)}
            {question !== 'begin' && question !== 'end' && (
              <Button type="button" text="Continue" onClick={handleContinueClick} className="default-button" />
            )}
          </Form>
        )
      }
    </div >
  )
}
