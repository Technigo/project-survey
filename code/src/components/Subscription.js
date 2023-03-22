/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import '../subscription.css'
import '../index.css'

const subscriptionQuestion = ({ subscriptionQ, setSubscriptionQ }) => {
  const handleSubscriptionQChange = (event) => {
    setSubscriptionQ(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="select-subscription">
          <h2>Do you have an active subscription at any cafe?</h2>
        </label>
        <select
          onChange={handleSubscriptionQChange}
          value={subscriptionQ}
          className="select-subscription"
          aria-live="polite">

          <option>Select your answer here:</option>
          <option>...</option>
          <option lang="en" label="Yes" value="Yes">Yes</option>
          <option lang="en" label="No" value="No">No</option>
          <option lang="en" label="Soon" value="Soon">I will have one soon</option>

        </select>
      </form>
    </div>
  );
}

export default subscriptionQuestion
