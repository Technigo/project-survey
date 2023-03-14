/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import '../index.css';

export const Checkbox = () => {
  const [check, setCheck] = useState(false)

  return (
    <form>
      <label>
        <p className="questionTitle">Newsletter?</p>
        <input
          type="checkbox"
          checked={check}
          onChange={(event) => setCheck(event.target.checked)} />
      </label>
    </form>
  );
};