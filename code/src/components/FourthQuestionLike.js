import React from 'react';
import './fourthquestion.css';

const FourthQuestionLike = ({ whatYouLike, checkedState, handleOnChange }) => {

  
  return (
    <div className="fourthQuestion">
      <p className="question">
        4{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        What do you like most about the app?
      </p>
      
      <div className="what-you-like">
        <ul className="checkbox-list">
          {whatYouLike.map((name, index) => {
            return (
              <li key={index}>
                <div className="checkbox-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FourthQuestionLike;
