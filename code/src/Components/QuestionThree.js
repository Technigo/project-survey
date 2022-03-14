import React, { useState } from "react";

export const QuestionThree = () => {
  const [wantNewsletter, SetWantNewsletter] = useState(false);

  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>Do you want to sign up to our newsletter?
        <input
        type="checkbox"
        checked={wantNewsletter}
        onChange={event => SetWantNewsletter(event.target.checked)}
        />
      </label>
    </form>
  )
}