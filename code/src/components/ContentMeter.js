import React from 'react';

const ContentMeter = ({ contentLevel, setContentLevel }) => {
  return (
    <div className="slidecontainer">
      <label htmlFor="content-range">
        How satisfied are you witt the size of your feet?
        <input
          type="range"
          min="1"
          max="10"
          value={contentLevel}
          className="slider"
          id="content-range"
          onChange={(event) => setContentLevel(event.target.value)} />
      </label>

    </div>
  )
}

export default ContentMeter;