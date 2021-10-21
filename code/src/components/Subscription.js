import React from "react";

const Subscription = ({
  subscriptionInput,
  onSubscriptionInputChange,
  onStepChange,
  onPreviousStepChange,
}) => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <p>
          Subscribe to our newsletter to submit and recive restaurant news in
          your e-mail
        </p>
        <form>
          <label htmlFor="subscriptionInput">Type your e-mail</label>
          <input
            id="subscriptionInput"
            type="email"
            value={subscriptionInput}
            onChange={onSubscriptionInputChange}
          />
        </form>
      </div>
      <div className="button-wrapper">
        <button onClick={onPreviousStepChange}>Previous question</button>
        <button disabled={subscriptionInput === ""} onClick={onStepChange}>
          Next question
        </button>
      </div>
    </div>
  );
};

export default Subscription;
