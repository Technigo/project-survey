import React from 'react';

const Summary = ({
  rating,
  usage,
  easeRange,
  checkedState,
  whatsMissing,
  performanceRange,
  myReason,
  recommend
}) => {
  console.log(checkedState);
  return (
    <div>
      <h2>Summary of your Evaluation!</h2>
      <p>You have given our app {rating} Stars.</p>
      <p>You used our app "{usage}".</p>

      {easeRange <= 1 && <p> You considered our app so complicated!</p>}
      {easeRange > 1 && easeRange <= 3 && (
        <p> You considered our app not very intuitive!</p>
      )}
      {easeRange > 3 && <p> You considered our app easy to use!</p>}
      <p>
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
      <p> You also wants to have "{whatsMissing}" in our app.</p>

      {performanceRange <= 1 && (
        <p> You considered our app performs quite poorly!</p>
      )}
      {performanceRange > 1 && easeRange <= 3 && (
        <p> You considered our app is an average app performance wise!</p>
      )}
      {performanceRange > 3 && (
        <p> You considered our app performs quite well!</p>
      )}
      {myReason && (
        <p> You think reason of unsatisfactory performance is "{myReason}"</p>
      )}
      {recommend === 'Yes' && (
        <p> We are glad that you want to recommend it.</p>
      )}
      {recommend === 'No' && (
        <p> Its unfortunate that you do not want to recommend it.</p>
      )}
    </div>
  );
};
export default Summary;
