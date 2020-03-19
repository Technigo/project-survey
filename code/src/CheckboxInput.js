import React from 'react'

export const CheckboxInput = ({ wantsNewsletter, setWantsNewsletter }) => {
  return (
    <label>
      Newsletter?
      <input type="checkbox"
        checked={wantsNewsletter}
        onChange={event => setWantsNewsletter(event.target.checked)}
      />
    </label>

  )
}
