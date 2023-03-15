/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

const Subscription = ({ subscription, setSubscription }) => {
  const handleSubscriptionChange = (event) => {
    setSubscription(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="active-subscription">
          <h2>Do you have an active subscription at any cafe?</h2>
        </label>
        <select
          onChange={handleSubscriptionChange}
          value={subscription}
          className="select-subscription"
          aria-live="polite">

          <option style={{ display: "none" }}>Select your answer here</option>
          <option lang="en" label="Yes" value="Yes">Yes</option>
          <option lang="en" label="No" value="No">No</option>
          <option lang="en" label="Soon" value="Soon">I will have one soon</option>
        </select>
      </form>
    </div>
  );
}

export default Subscription