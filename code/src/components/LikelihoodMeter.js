import React from 'react';

const LikelihoodMeter = ({ likelihood, setLikelihood }) => {
  return (
    <div className="question-wrapper slidecontainer">
      <fieldset>
        <label htmlFor="likelihood-range">
          How likely are you to be accepted to Hogwarts Community College?
          (not likely - very likely)
          <br />
          <input
            required
            type="range"
            min="1"
            max="10"
            value={likelihood}
            className="input-field slider"
            id="likelihood-range"
            onChange={(event) => setLikelihood(event.target.value)} />
        </label>
      </fieldset>
    </div>
  )
}

export default LikelihoodMeter;