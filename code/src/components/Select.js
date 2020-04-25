import React, { useState, useRef } from 'react'
import { EndPage } from 'components/EndPage'
import {values, Bar} from 'components/Form'

export const Select = () => {
    const [location, setLocation] = useState("")
   
    return (
      // <form onSubmit={handleSubmit}>
      <label>
        My city:
        <select
          onChange={e => setLocation(e.target.value)}
          value={location}
        >
          <option value="">Select location</option>
          <option value="Stockholm">Stockholm</option>
          <option value="Oslo">Oslo</option>
          <option value="London">London</option>
          <option value="Rome">Rome</option>
          <option value="Paris">Paris</option>
          <option value="Madrid">Madrid</option>
        </select>
      </label>
      // <input type="submit" value="Submit" />
      // </form>
    )
  }

  