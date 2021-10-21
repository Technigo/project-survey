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
          Subscribe to our newsletter to recive your answers and restaurant news
          in your e-mail
        </p>
        <form>
          <label htmlFor="subscriptionInput">Type your e-mail</label>
          <input
            id="subscriptionInput"
            type="email"
            value={subscriptionInput}
            onChange={onSubscriptionInputChange}
            required
          />
        </form>
      </div>
      <div className="button-wrapper">
        <button onClick={onPreviousStepChange}>Previous question</button>
        <button onClick={onStepChange}>Next question</button>
      </div>
    </div>
  );
};

export default Subscription;
