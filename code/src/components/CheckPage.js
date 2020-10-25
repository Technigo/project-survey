import React from "react";

const CheckPage = ({ setWantsNewsletter, wantsNewsletter }) => {
  return (
    <div>
      <h2>Sign up for out newsletter?</h2>
      <label>
        Yes! I want to subscribe
        <input
          type="checkbox"
          checked={wantsNewsletter}
          onChange={(event) => setWantsNewsletter(event.target.checked)}
        />
      </label>
    </div>
  );
};

export default CheckPage;
