import React, { useState } from 'react'

const PreferredHoursInput = ({ changePage }) => {
  const [location, setLocation] = useState();

  return (
    <section className='page'>
      <h2>3. How would you prefer to work?</h2>
      <form>
        <select
          onChange={event => setLocation(event.target.value)}
          value={location}
        >
          <option value='office'>Fully at the office</option>
          <option value='mostOffice'>Most days at the office</option>
          <option value='hybrid'>Hybrid (50 - 50)</option>
          <option value='mostRemote'>Most days remote</option>
          <option value='remote'>Fully remote</option>
        </select>
      </form>
      <button onClick={() => { changePage() }}>Next</button>
    </section>
  )
}

export default PreferredHoursInput;