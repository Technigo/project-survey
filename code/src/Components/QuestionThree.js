import React from "react";

const MemberConfimation = ["Yes", "No"]

export const QuestionThree = ({ wantNewsletter, onNewsletterInputChange}) => {

  return (
    <form className="member-form" onSubmit={event => event.preventDefault()}>
      <h3>Are you already a member of our art assocation <span className="highlight">Art Emergence?</span></h3>
      {MemberConfimation.map(answer => (
        <label htmlFor="answerNewsletter" key={answer}>
          <input
          type="checkbox"
          value={answer}
          checked={wantNewsletter === answer}
          onChange={onNewsletterInputChange}
          />
          {answer}
        </label>
      ))}
    </form>
  )
}