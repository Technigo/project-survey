import React from 'react';
import './summary.css';

const Summary = ({
  rating,
  usage,
  easeRange,
  checkedState,
  whatsMissing,
  performanceRange,
  myReason,
  recommend,
}) => {
  return (
    <div className="summary">
      <h2>Summary of your evaluation!</h2>
      <div className="evaluation">
        <p>
          <span>
            <b>&#x2192;</b>
          </span>{' '}
          You have given our app {rating} stars.
        </p>
        {usage !== 'Type or select an option...' && (
          <p>
            <span>
              <b>&#x2192;</b>
            </span>{' '}
            You used our app "{usage}".
          </p>
        )}
        {easeRange <= 1 && (
          <p>
            {' '}
            <span>
              <b>&#x2192;</b>
            </span>{' '}
            You considered our app so complicated!
          </p>
        )}
        {easeRange > 1 && easeRange <= 3 && (
          <p>
            {' '}
            <span>
              <b>&#x2192;</b>
            </span>{' '}
            You considered our app not very intuitive!
          </p>
        )}
        {easeRange > 3 && (
          <p>
            {' '}
            <span>
              <b>&#x2192;</b>
            </span>{' '}
            You considered our app easy to use!
          </p>
        )}
        <p>
          <span>
            <b>&#x2192;</b>
          </span>{' '}
          You like its
          {checkedState.map((item, index) => {
            return (
              <span key={index}>
                {' '}
                {item} {''}{' '}
              </span>
            );
          })}
        </p>
        {whatsMissing !== '' && (
          <p>
            {' '}
            <span>
              <b>&#x2192;</b>
            </span>{' '}
            You also wants to have "{whatsMissing}" in our app.
          </p>
        )}
        {performanceRange <= 1 && (
          <p>
            {' '}
            <span>
              <b>&#x2192;</b>
            </span>{' '}
            You considered our app performs quite poorly!
          </p>
        )}
        {performanceRange > 1 && easeRange <= 3 && (
          <p>
            {' '}
            <span>
              <b>&#x2192;</b>
            </span>{' '}
            You considered our app is an average app performance wise!
          </p>
        )}
        {performanceRange > 3 && (
          <p>
            {' '}
            <span>
              <b>&#x2192;</b>
            </span>{' '}
            You considered our app performs quite well!
          </p>
        )}
        {myReason && (
          <p>
            {' '}
            <span>
              <b>&#x2192;</b>
            </span>{' '}
            You think reason of unsatisfactory performance is "{myReason}"
          </p>
        )}
        {recommend === 'Yes' && (
          <p>
            {' '}
            <span>
              <b>&#x2192;</b>
            </span>{' '}
            We are glad that you want to recommend it.
          </p>
        )}
        {recommend === 'No' && (
          <p>
            {' '}
            <span>
              <b>&#x2192;</b>
            </span>{' '}
            Its unfortunate that you do not want to recommend it.
          </p>
        )}
      </div>
    </div>
  );
};
export default Summary;
