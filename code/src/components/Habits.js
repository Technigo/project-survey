import React, { useState } from 'react';

export const Habits = () => {
  const [wantsNewsletter, setWantsNewsletter] = useState(false);

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        Newsletter?
        <input
          type="checkbox"
          checked={wantsNewsletter}
          onChange={(event) => setWantsNewsletter(event.target.checked)} />
      </label>
    </form>
  );
}