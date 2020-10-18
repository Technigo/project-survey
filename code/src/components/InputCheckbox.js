import React, { useState } from 'react'

export const InputCheckbox = () => {
  const [agreeOnTerms, setAgreeOnTerms] = useState(false)

  return (
    <label>
      Agree to terms and conditions:
      <input
        key={agreeOnTerms.id}
        type='checkbox'
        checked={agreeOnTerms}
        onChange={event => setAgreeOnTerms(event.target.checked)}
      />
    </label>
  )
}