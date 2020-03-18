import React from 'react'
import { Progress } from 'Compontents/Progress'

export const Checkbox = ({ agree, setAgree }) => {

  return (
    <form>
      <Progress current='3' total='3' />
      <p>Do you agree that you are an awesome developer?</p>
      <label>
        <input
          type="checkbox"
          checked={agree}
          onChange={event => setAgree(event.target.value)}
        />
        Yes
      </label>
    </form>
  )
}