import React from 'react'

export const NewsletterInput = ({ wantsNewsletter, setWantsNewsletter }) => {
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
