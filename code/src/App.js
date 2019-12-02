import React, { useState } from 'react'
import { Header } from './components/layout/Header'
import { Form } from './components/form/Form'
import { Button } from './components/button/Button'
import { Checkbox } from './components/form/Checkbox'
import { Radiobutton } from './components/form/Radiobutton'
import { SurveySection } from './components/layout/SurveySection'
import { Select } from './components/form/Select'
import { SelectOption } from './components/form/SelectOption'
import { Summary } from 'components/layout/Summary'
import { Image } from 'components/graphic/Image'
import { Heading } from 'components/text/Heading'
import { Description } from 'components/text/Description'

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
  const [gameDay, setGameDay] = useState()
  const [videogameApproval, setvideogameApproval] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [question, setQuestion] = useState('introduction')


  const handleSubmit = (event) => {
    event.preventDefault()
    setShowResult(true)
  }

  const handleContinueClick = () => {
    if (question === 'introduction') {
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
      {question === "introduction" && (
        <Header
          title="Game night"
          description="Give your input about our game nights."
          buttonText="Take the survey"
          setQuestion="introduction">
          <Button
            type="button"
            text="Take the survey"
            onClick={handleContinueClick}
            className="start-button" />
        </Header>
      )}
      {
        showResult && (
          <Summary
            title="Summary"
            boardgame={game}
            weekday={gameDay}
            approval={videogameApproval}>
            <Image src="images/undraw-having-fun.svg" alt="People having fun together." className="summary-image" />
          </Summary>
        )
      }
      {
        !showResult && question !== 'introduction' && (
          <Form onSubmit={handleSubmit}>
            {question === 'first' && (
              <SurveySection
                className="survey-section">
                <Image
                  src="images/undraw-playing.svg"
                  alt="Gaming"
                  className="section-image" />
                <Heading
                  className="survey-question-title"
                  text="What game would you like to play?" />
                <Description
                  className="survey-question-description"
                  text="Choose the game you would like to play the most this time." />
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
                <div className="survey-navigation">
                  {game === 'Select game' && (
                    <Button
                      type="button"
                      text="Continue"
                      onClick={handleContinueClick}
                      className="default-button"
                      disabled="disabled" />
                  )}
                  {game !== 'Select game' && (
                    <Button
                      type="button"
                      text="Continue"
                      onClick={handleContinueClick}
                      className="default-button" />
                  )}
                </div>
              </SurveySection>)}
            {question === 'second' && (
              <SurveySection
                className="survey-section"
              >
                <Image
                  src="images/undraw-events.svg"
                  alt="Calendar"
                  className="section-image" />
                <Heading
                  className="survey-question-title"
                  text="Which day would you prefer to play?" />
                <Description
                  className="survey-question-description"
                  text="Right now we only play on weekends. Choose the day that suits you best." />
                <div className="radiobuttons">
                  {gamedays.map(gameday => {
                    return (
                      <Radiobutton
                        key={gameday}
                        label={gameday}
                        name={gameday}
                        value={gameday}
                        onChange={event => setGameDay(event.target.value)}
                        checked={gameDay === gameday} />
                    )
                  })}
                </div>
                <div className="survey-navigation">
                  {gameDay === undefined && (
                    <Button
                      type="button"
                      text="Continue"
                      onClick={handleContinueClick}
                      className="default-button"
                      disabled="disabled" />
                  )}
                  {gameDay !== undefined && (
                    <Button
                      type="button"
                      text="Continue"
                      onClick={handleContinueClick}
                      className="default-button" />
                  )}
                </div>
              </SurveySection>)}
            {question === 'third' && (
              <SurveySection
                className="survey-section">
                <Image src="images/undraw-gaming.svg"
                  alt="Videogame control"
                  className="section-image" />
                <Heading
                  className="survey-question-title"
                  text="Would you like to play videogames?" />
                <Description
                  className="survey-question-description"
                  text="Up until now we've only been playing board games during our game nights." />
                <div className="checkboxes">
                  <Checkbox
                    label="I would like to play videogames on our game nights."
                    name="Yes"
                    value="Yes"
                    onChange={event => setvideogameApproval(event.target.value)}
                    checked={videogameApproval === "Yes"} />
                </div>
                <div className="survey-navigation">
                  <Button
                    type="button"
                    text="Continue"
                    onClick={handleContinueClick}
                    className="default-button" />
                </div>
              </SurveySection>)}
            {question === 'end' && (
              <SurveySection className="survey-section">
                <Image
                  src="images/undraw-messaging-fun.svg"
                  alt="Send"
                  className="section-image" />
                <Heading
                  className="survey-question-title"
                  text="Submit your answers" />
                <Description
                  className="survey-question-description"
                  text="Thank you for answering this survey!" />
                <Button
                  type="submit"
                  text="Submit survey"
                  className="default-button submit-button" />
              </SurveySection>)}
          </Form>
        )
      }
    </div >
  )
}
