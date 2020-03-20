import React from 'react'

export const SubscriptionQuestion = (props) => {
  const { wanstNewsletter, setWantsNewsletter } = props
  return (
    <label>
      Yes, I want to subscribe to newsletter.
      <input
        type='checkbox'
        checked={wanstNewsletter}
        onChange={event => setWantsNewsletter(event.target.checked)}
      />
    </label>
  )
}