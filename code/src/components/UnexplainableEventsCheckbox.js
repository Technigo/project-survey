import React from 'react';

const UnexplaiableEventsCheckbox = ({ checked, setChecked }) => {
  return (
    <div className="question-wrapper">
      <fieldset>
        <p>Have you had anything happening to you when you have been angry or scared
          that you couldn&apos;t explain?
        </p>
        <br />
        <label htmlFor="yes">
          Yes
          <input
            type="checkbox"
            id="yes"
            name="checkbox"
            value="have"
            onChange={(event) => setChecked(event.target.value)}
            checked={checked === 'have'} />
        </label>
        <label htmlFor="no">
          No
          <input
            type="checkbox"
            id="no"
            name="checkbox"
            value="have not"
            onChange={(event) => setChecked(event.target.value)}
            checked={checked === 'have not'} />
        </label>
      </fieldset>
    </div>
  )
}

export default UnexplaiableEventsCheckbox;