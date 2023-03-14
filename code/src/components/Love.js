/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const LoveCats = ({ love, setLove }) => {
  const handleLoveChange = (event) => {
    setLove(event.target.value)
  }

  return (
    <div>
      <label htmlFor="love">Do you love cats?</label>
      <div>
        <label htmlFor="yes">
          <input
            id="yes"
            type="radio"
            value="Yes!"
            onChange={handleLoveChange}
            checked={love === 'Yes!'}
            aria-label="yes" />
          <p>Yes, of course I love cats!</p>
        </label>
        <label htmlFor="no">
          <input
            id="no"
            type="radio"
            value="No, because my heart ❤️ is a stone 🪨."
            onChange={handleLoveChange}
            checked={love === 'No, because my heart ❤️ is a stone 🪨.'}
            aria-label="no" />
          <p>No, I don&apos;t love cats because my heart is made of stone.</p>
        </label>
        <label htmlFor="not yet">
          <input
            id="not yet"
            type="radio"
            value="Not yet."
            onChange={handleLoveChange}
            checked={love === 'Not yet.'}
            aria-label="not yet" />
          <p>I haven&apos;t decided yet.</p>
        </label>
      </div>
    </div>
  );
}
export default LoveCats;