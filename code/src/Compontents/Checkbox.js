import React, { useState } from 'react'

export const Checkbox = () => {
  const [agree, setAgree] = useState(false)
  return (
    <form>
      <label>
        Do you agree that you are an awesome developer?
        <input
          type="checkbox"
          checked={agree}
          onChange={event => setAgree(event.target.value)}
        />
      </label>
    </form>
  )
}