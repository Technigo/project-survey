import React from 'react'

export const OriginQuestion = (props) => {
  const { location, setLocation } = props
  return (
    <label>
      Where are you from?
      <select
        onChange={event => setLocation(event.target.value)}
        value={location}
      >
        <option value="default">select option</option>
        <option value="Seoul">Seoul</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Stars Hollow">Stars Hollow</option>
        <option value="Cornwall">Cornwall</option>
        <option value="Another galaxy">Another galaxy</option>
      </select>
    </label>
  )
}