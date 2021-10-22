import React from 'react'

const PreferenceQuestion = ({
  surfInput,
  clothingInput,
  travelInput,
  eventsInput,
  onSurfInputChange,
  onClothingInputChange,
  onTravelInputChange,
  onEventsInputChange,
  onStepChange,
  onEnter,
}) => {
  return (
    <>
      <h2> Which type of content do you prefer?</h2>
      <form className="checkbox-container form">
        <div className="input-child">
          <label className="label-checkbox" htmlFor="name">
            Surf
          </label>
          <input
            id="surfInput"
            type="checkbox"
            name="surfInput"
            checked={surfInput}
            value={surfInput}
            onChange={onSurfInputChange}
            onKeyPress={onEnter}
          />
        </div>{' '}
        <div className="input-child">
          <label className="label-checkbox" htmlFor="clothingInput">
            {' '}
            Clothing{' '}
          </label>
          <input
            id="clothingInput"
            type="checkbox"
            name="clothingInput"
            // checked={clothingInput}
            value={clothingInput}
            onChange={onClothingInputChange}
            defaultChecked={clothingInput}
            onKeyPress={onEnter}
          />
        </div>
        <div className="input-child">
          <label className="label-checkbox" htmlFor="eventsInput">
            {' '}
            Events{' '}
          </label>
          <input
            id="eventsInput"
            type="checkbox"
            name="eventsInput"
            checked={eventsInput}
            value={eventsInput}
            onChange={onEventsInputChange}
            onKeyPress={onEnter}
          />
        </div>
        <div className="input-child">
          <label className="label-checkbox" htmlFor="travelInput">
            {' '}
            Travel{' '}
          </label>
          <input
            id="travelInput"
            type="checkbox"
            name="travelInput"
            checked={travelInput}
            value={travelInput}
            onChange={onTravelInputChange}
            onKeyPress={onEnter}
          />
        </div>
      </form>
      <button
        // disabled={surfInput === false}
        className="btn6"
        type="button"
        onClick={onStepChange}
      >
        Last question
      </button>
    </>
  )
}

export default PreferenceQuestion
