import React, {useState} from 'react'
export const Checkbox = () => {
  const [wantsParking, setParking] = useState(false)


  return (
    <label>
    Need parking?
    <input
      type="checkbox"
      checked={wantsParking}
      onChange={event => setParking(event.target.checked)}
    />
  </label>
  )
}