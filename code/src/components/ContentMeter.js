import React from 'react';

const ContentMeter = ({ contentLevel, setContentLevel }) => {
  return (
    <div className="question-wrapper slidecontainer">
      <fieldset>
        <label htmlFor="content-range">
          How likely are you to be accepted to Hogwarts Community College?
          (not likely - very likely)
          <br />
          <input
            type="range"
            min="1"
            max="10"
            value={contentLevel}
            className="slider"
            id="content-range"
            onChange={(event) => setContentLevel(event.target.value)} />
        </label>
      </fieldset>
    </div>
  )
}

export default ContentMeter;