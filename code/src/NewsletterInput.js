import React from 'react'
import './newsletterInput.css'

export const NewsletterInput = ({ wantsNewsletter, setWantsNewsletter }) => {
  return (
    <label className="newsContainer">
      Sign up for our newsletter!
      <input type="checkbox"
        checked={wantsNewsletter}
        onChange={event => setWantsNewsletter(event.target.checked)}
      />
      <span className="newsCheckmark"></span>
    </label>
  )
}
