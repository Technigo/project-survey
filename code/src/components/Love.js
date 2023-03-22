/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
import React from 'react';

const Love = ({ love, setLove }) => {
  const handleLoveChange = (event) => {
    setLove(event.target.value)
  }

  // Renders a group of radio buttons for the user to select their level of love for cats.
  // Does not use a form submission, as the user's selection can be updated in real-time without the need for a submit button.
  // Defines a handleLoveChange function to update the state of love when the user selects a new radio button.

  return (
    <div>
      <form>
        <label htmlFor="love"><h3>Do you love cats?</h3></label>
        <div className="radio-btns">
          <label htmlFor="yes">
            <input
              id="yes"
              type="radio"
              value="Yes! ❤️"
              onChange={handleLoveChange}
              checked={love === 'Yes! ❤️'}
              aria-label="yes" />
            Yes, of course I love cats!
          </label>
          <label htmlFor="no">
            <input
              id="no"
              type="radio"
              value="No, because my heart ❤️ is a stone 🪨."
              onChange={handleLoveChange}
              checked={love === 'No, because my heart ❤️ is a stone 🪨.'}
              aria-label="no" />
            No, I don&apos;t love cats because my heart is made of stone.
          </label>
          <label htmlFor="not yet">
            <input
              id="not yet"
              type="radio"
              value="Not yet."
              onChange={handleLoveChange}
              checked={love === 'Not yet.'}
              aria-label="not yet" />
            I haven&apos;t decided yet.
          </label>
        </div>
      </form>
    </div>
  );
}
export default Love;