import React, { useState } from 'react';

export const Adults = () => {
  const [wantsNewsletter, setWantsNewsletter] = useState(false);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3>Check all of the habits that apply to you:</h3>
      <label>
          Moderate to high intensity cardio at least 2.5 hours a week?
        <input
          type="checkbox"
          checked={wantsNewsletter}
          onChange={(event) => setWantsNewsletter(event.target.checked)} />
      </label>
      <label>
          Strength train at least 2 days a week?
        <input
          type="checkbox"
          checked={wantsNewsletter}
          onChange={(event) => setWantsNewsletter(event.target.checked)} />
      </label>
    </form>
  );
}