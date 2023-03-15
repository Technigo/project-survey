import React from 'react'

/* radio button component */
/* export,const,food = decloration */
/* = other side is argument */
export const RadioButton = () => {
  return (
    <div>
      {/* // eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="radio-button"> Some text here </label>
      <input type="radio" id="radio-button" />

    </div>

  );
};
/* export default RadioButton; */