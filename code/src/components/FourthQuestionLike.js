import React from 'react';
import './fourthquestion.css';

const FourthQuestionLike = () => {
  return (
    <div className="fourthQuestion">
      <p className="question">
        4{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        What do you like most about the app?
      </p>
      <div className="checkbox">
        <span>
          <input type="checkbox" id="features" />
          <label htmlFor="features"> Features</label>
        </span>
        <span>
          <input type="checkbox" id="ease" />
          <label htmlFor="ease"> Ease of Use</label>
        </span>
        <span>
          <input type="checkbox" id="design" />
          <label htmlFor="design"> Design</label>
        </span>
        <span>
          <input type="checkbox" id="content" />
          <label htmlFor="content"> Content</label>
        </span>
      </div>
    </div>
  );
};

export default FourthQuestionLike;
