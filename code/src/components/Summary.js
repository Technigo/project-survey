import React from 'react';

const Summary = ({ rating, usage, easeRange, checkedState, performanceRange }) => {
  
  console.log(checkedState);
  return (
    <div>
      <p>You have given it {rating} Stars.</p>
      <p>You used our app {usage}.</p>
      <p>You have given it {easeRange} .</p>
      <p>
        You like its
        {checkedState.map((item, index) => {
          return(
            <span key= {index}>{item} </span>
          )
        })}
      </p>
      <p>You have given it {performanceRange} .</p>
    </div>
  );
};
export default Summary;
