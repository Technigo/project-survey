import React, { useState } from 'react';

export const Checkbox = () => {
  const [wantsNewsletter, setWantsNewsletter] = useState(false);

  return (
    <form>
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