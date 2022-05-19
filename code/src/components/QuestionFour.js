import React from "react"

export const QuestionFour = ({ motherhood, setMotherhood, step, setStep }) => {
  return (
    <div className='main'>
      <div className='form-container'>
        <form>
          <label>
            <h3 tabindex='0'>Kids, haa?</h3>
            <p tabindex='0'>
              What about if your new co-worker have kids? Can you see all the
              benefits with planing, structuring, doing multiple things at the
              same time, the productiveness that brings, or do you just see snot
              snot snot? So, what do you think, can parenthood be good thing
              when it comes to work?{" "}
            </p>
            <p>
              {" "}
              Shine bright like a dimond!
              <input
                type='checkbox'
                checked={motherhood}
                onChange={(event) => setMotherhood(event.target.checked)}
              />{" "}
            </p>
            <p>
              Naa.. Alway late and home with sick kids.
              <input type='checkbox' />{" "}
            </p>
          </label>
        </form>
        <span>
          <button
            className='button backbutton'
            onClick={() => setStep(step - 1)}
          >
            <span>BACK </span>
          </button>
          <button
            className='button nextbutton'
            onClick={() => setStep(step + 1)}
          >
            <span>NEXT </span>
          </button>
        </span>
      </div>
    </div>
  )
}
