import React from "react";

export const QuestionThree = ({ wantNewsletter, onNewsletterInputChange}) => {

  return (
    <form onSubmit={event => event.preventDefault()}>
      <label htmlFor="newsletter">Do you want to sign up to our newsletter?
        <input
        type="checkbox"
        checked={wantNewsletter}
        onChange={onNewsletterInputChange}
        />
      </label>
    </form>
  )
}