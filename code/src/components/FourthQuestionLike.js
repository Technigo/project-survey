import React from 'react';

const FourthQuestionLike = () => {
  return (
    <div>
      <p>
        4{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        What do you like most about the app?
      </p>
      <div>
        <input type="checkbox" id="features" />
        <label htmlFor="features"> Features</label>
        <input type="checkbox" id="ease" />
        <label htmlFor="ease"> Ease of Use</label>
        <input type="checkbox" id="design" />
        <label htmlFor="design"> Design</label>
        <input type="checkbox" id="content" />
        <label htmlFor="content"> Content</label>
      </div>
    </div>
  );
}

export default FourthQuestionLike;
