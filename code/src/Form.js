import React, { useState } from 'react'
import tree1 from 'images/tree1.jpeg'
import tree2 from 'images/tree2.jpeg'
import tree3 from 'images/tree3.jpeg'
import tree4 from 'images/tree4.jpeg'

export const Form = () => {
  const [ageGroup, setAgeGroup] = useState()
  const [merryChristmas, setMerryChristmas] = useState('')
  const [decoration, setDecoration] = useState('')
  const [enjoysChristmas, setEnjoysChristmas] = useState(false)
  const [preferredImage, setPreferredImage] = useState()
  const [showSummary, setShowSummary] = useState(false) // False because we don't want to show summary to start with
  const [question, setQuestion] = useState('welcome') //To have one question at a time

  const ageGroups = [
    "0-18",
    "19-29",
    "30-39",
    "40-49",
    "50+"
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSummary(true)//On submit we want to show the summary
  }

  const handleContinue = () => {
    if (question === 'welcome') {
      setQuestion('timesOfChristmases')
    }
    else if (question === 'timesOfChristmases') {
      setQuestion('merryChristmas')
    } else if (question === 'merryChristmas') {
      setQuestion('christmasDecoration')
    } else if (question === 'christmasDecoration') {
      setQuestion('enjoysChristmas')
    } else if (question === 'enjoysChristmas') {
      setQuestion('prettiestTree')

    }
  }


  const imageToShow = () => {
    if (preferredImage === "tree1") {
      return (<div className="image-box1"
        style={{ backgroundImage: `url(${tree1})` }}
        aria-label="Image of Christmas tree with eyes">
      </div>)
    } else if (preferredImage === "tree2") {
      return (
        <div className="image-box2"
          style={{ backgroundImage: `url(${tree2})` }}
          aria-label="Image of Christmas tree with Santa Clauses">
        </div>
      )
    } else if (preferredImage === "tree3") {
      return (
        <div className="image-box3"
          style={{ backgroundImage: `url(${tree3})` }}
          aria-label="Image of spruce tree in a field">
        </div>
      )
    } else if (preferredImage === "tree4") {
      return (
        <div className="image-box4"
          style={{ backgroundImage: `url(${tree4})` }}
          aria-label="Image of palm tree">
        </div>
      )
    }

  }

  return (
    <div>
      {/*If the first is true - everything after && will render*/}
      {showSummary && (
        <div className="summary">
          <h1>Summary</h1>
          <div>
            {enjoysChristmas ? "I'm glad to hear that you enjoy Christmas! " : "So you don't enjoy Christmas? That's fine as long as you're not a grinch! "}
            You answered that {decoration} is your decoration of choice and that you've celebrated Christmas around {ageGroup} times!
        <br></br>
            <br></br>
            Well, {merryChristmas} to you too!
            Hope your Christmas tree looks like this:
            <br></br>
            {imageToShow()}
            <footer>
              <p>Technigo Bootcamp 2019 - Matilda Arvidsson
                <br></br>
                (Pictures from Unsplash)
              </p>
            </footer>
          </div>
        </div>
      )}

      {/*If summary is not shown (if showSummary is false), then form is shown*/}
      {!showSummary &&
        (

          <form onSubmit={handleSubmit}>

            <div className="header">
              <h1>Christmas survey</h1>
            </div>

            {/**WELCOME-SECTION */}
            {question === 'welcome' && (
              <div className="welcome-div">
                <p>Welcome to a survey about Christmas! This is a school project and your info will not be saved anywhere. Press the button below to get started.</p>
                <button
                  type="button"
                  onClick={handleContinue}
                >
                  Start
                </button>
              </div>
            )}

            {/**QUESTION 1 */}
            {question === 'timesOfChristmases' && (
              < div className="radio-buttons">
                How many Christmases have you experienced?
                {ageGroups.map(group => (
                  <label key={group}>
                    <input
                      onKeyPress={(event) => {
                        if (event.key === 'Enter') { handleContinue() }
                      }}
                      autoFocus
                      type="radio"
                      value={group}
                      onChange={event => setAgeGroup(event.target.value)}
                      checked={ageGroup === group}
                    />
                    <span className="fakeRadio"></span>
                    {group}
                  </label>
                ))}
              </div>
            )}

            {/**QUESTION 2 */}
            {question === 'merryChristmas' && (
              < div className="textinput-div">
                <label>How do you say Merry Christmas in your language?
                  <input
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') { handleContinue() }
                    }}
                    autoFocus
                    type="text"
                    onChange={(event) => setMerryChristmas(event.target.value)}
                    value={merryChristmas}
                  />
                </label>
              </div>
            )
            }

            {/**QUESTION 3 */}
            {question === 'christmasDecoration' && (
              < div className="select-div" >
                <label>Favourite Christmas decoration:
                  <select
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') { handleContinue() }
                    }}
                    autoFocus
                    onChange={event => setDecoration(event.target.value)}
                    value={decoration}
                  >
                    <option value="">Select decoration:</option>
                    <option value="christmas tree">Christmas trees</option>
                    <option value="advent candles">Advent candles</option>
                    <option value="poinsettia flower">Poinsettia flowers</option>
                    <option value="star lamp">Star lamps</option>
                    <option value="nothing">I don't celebrate Christmas</option>
                  </select>
                </label>
              </div >
            )
            }

            {/**QUESTION 4 */}
            {question === 'enjoysChristmas' && (
              <div className="checkbox-div">
                <label>
                  Enjoy Christmas?
                <input
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') { handleContinue() }
                    }}
                    autoFocus
                    type="checkbox"
                    checked={enjoysChristmas}
                    onChange={event => setEnjoysChristmas(event.target.checked)}
                  />
                  <span className="fakeCheckbox" ariaLabel="checkbox"></span>
                </label>
              </div>
            )
            }

            {/**QUESTION 5 */}
            {question === 'prettiestTree' && (
              <div className="images">
                Which Christmas tree do you think is the most beautiful?
                <div className="only-images">

                  {/**Tree 1*/}
                  <label>
                    <input
                      onKeyPress={(event) => {
                        if (event.key === 'Enter') { handleContinue() }
                      }}
                      autoFocus
                      type="radio"
                      value="tree1"
                      onChange={() => setPreferredImage("tree1")}
                      checked={preferredImage === "tree1"}
                    >
                    </input>
                    <div className="image-box1"
                      style={{ backgroundImage: `url(${tree1})` }}
                      aria-label="Image of Christmas tree with eyes">
                    </div>
                  </label>

                  {/**Tree 2*/}
                  <label>
                    <input type="radio"
                      value="tree2"
                      onChange={() => setPreferredImage("tree2")}
                      checked={preferredImage === "tree2"}
                    >
                    </input>
                    <div className="image-box2"
                      style={{ backgroundImage: `url(${tree2})` }}
                      aria-label="Image of Christmas tree with Santa Clause's">
                    </div>
                  </label>

                  {/**Tree 3*/}
                  <label>
                    <input type="radio"
                      value="tree3"
                      onChange={() => setPreferredImage("tree3")}
                      checked={preferredImage === "tree3"}
                    >
                    </input>
                    <div className="image-box3"
                      style={{ backgroundImage: `url(${tree3})` }}
                      aria-label="Image of spruce tree in a field">
                    </div>
                  </label>

                  {/**Tree 4*/}
                  <label>
                    <input type="radio"
                      value="tree4"
                      onChange={() => setPreferredImage("tree4")}
                      checked={preferredImage === "tree4"}
                    >
                    </input>
                    <div className="image-box4"
                      style={{ backgroundImage: `url(${tree4})` }}
                      aria-label="Image of palm tree">
                    </div>
                  </label>
                </div>

                {/*SUBMIT-BUTTON*/}
                <div className="submit-button">
                  < button type="submit" > Submit</button>
                </div>
              </div>

            )
            }
            {question !== 'prettiestTree' && (
              <button
                className="next-button"
                type="button"
                onClick={handleContinue}>
                Next
</button>
            )}
          </form >
        )
      }

    </div >
  )
}