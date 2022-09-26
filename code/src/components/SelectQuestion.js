import React, { useState } from 'react';

const SelectQuestion = () => {
  const [location, setLocation] = useState('')
  return (
    <form>
      <select
        onChange={(event) => setLocation(event.target.value)}
        value={location}>

        <option value="">Select location:</option>
        <option value="">Stockholm</option>
        <option value="">Lisbon</option>
        <option value="">Vaasa</option>
      </select>

    </form>
  )
}

export default SelectQuestion;