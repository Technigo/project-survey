import React, { useState } from "react";
import "Css/app.css";

export const Form = () => {
  const [approved, setApproved] = useState("ok i guess")
  const [text, setText] = useState("")
  const [submit, setSubmit] = useState(false)
  const [question, setQuestion] = useState(1)
  const [select, setSelect] = useState("nothing")
  const [rate, setRate] = useState("5")

  const enabled = text.length > 0

  const handleNext = () => {
    setQuestion(question + 1)
  }
  const handleBack = () => {
    setQuestion(question - 1)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmit(true)
  }

  return (

    <div className="app">
      {!submit && (
        <form onSubmit={handleSubmit}>

          {question === 1 && (
            <section className="question">
              <h3>Välkommen till ölprovningen!</h3>
              <h2>vad heter du?</h2>
              <label className="text">
                <input
                  type="text"
                  required
                  value={text}
                  placeholder="Type here.."
                  onChange={(event) => setText(event.target.value)}
                  onKeyPress={(event) => { event.key === "Enter" && event.preventDefault() }} />
              </label>
            </section>
          )}


          {question === 2 && (
            <div className="question"><h2>What beer are we tasting today?</h2>
              <div className="radio-wrapper">
                <label>

                  <div className="select-main">
                    <select
                      onChange={event => setSelect(event.target.value)}
                      value={select}
                    >
                      <option value="nothing">Select beer</option>
                      <option value="the lager">Lager</option>
                      <option value="the IPA">IPA</option>
                      <option value="the sour ale">Sour</option>
                      <option value="the stout">Stout</option>
                    </select>
                  </div>
                </label>
              </div>
            </div>
          )}

          {question === 3 && (
            <section className="question">
              <h2>Most importantly, how is it?</h2>
              <div className="radio-wrapper">
                <label className="radio-button">

                  <input
                    type="radio"
                    value="approved"
                    onChange={() => setApproved('good')}
                    checked={approved === 'good'} />
                  <span>Good</span>
                </label>
                <label className="radio-button">
                  <input
                    type="radio"
                    value="not-approved"
                    onChange={() => setApproved('not so good')}
                    checked={approved === 'not so good'} />
                  <span>Not so good</span>

                </label>
              </div>
            </section>
          )}

          {question === 4 && (
            <section className="question">
              <label>
                <h2>How would you rate this beer?</h2>
                <div className="slidercontainer"></div>
                <input className="slider"
                  type="range"
                  min={0}
                  max={10}
                  value={rate}
                  onChange={(event) => setRate(event.target.value)}
                />

              </label>
              <div className="show-range">{rate}/10</div>
            </section>
          )}

          <div className="button-wrapper">
            {question !== 1 && (
              <button type="button" onClick={handleBack}>Back</button>
            )}
            {question !== 4 && (
              <button type="button" onClick={() => handleNext(question + 1)} disabled={!enabled}>Next</button>
            )}
            {question === 4 && (<button className="button-submit" type="submit">Done</button>)}
          </div>
        </form>

      )
      }
      {
        submit && (
          <div className="submit-wrapper">
            <h2 className="submit-name">Hello {text}!</h2>
            <p> You tried {select} today and thought it was {approved} and
            you gave {select} a score of {rate} out of ten!</p>

          </div>
        )
      }

    </div >
  );
};
