import React from 'react';

export const ExtraItem = ({ extraItem, setExtraItem }) => {
  return (
  // eslint-disable-next-line indent
        // eslint-disable-next-line indent
    <>
      <p>Please add your extra item!</p>
      <input
        type="text"
        value={(extraItem)}
        onChange={(event) => setExtraItem(event.target.value)} />
    </>
  )
}
