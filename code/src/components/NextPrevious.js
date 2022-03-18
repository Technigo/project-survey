import React from 'react';

const NextPrevious = (props) => {

  
  return (
  <div className="container forward-next">
    <button onClick={() =>props.setCounter(props.counter - 1)}>Previous question</button>
    <button onClick={() =>props.setCounter(props.counter + 1)}>Next question</button>
  </div>
  );
};

export default NextPrevious;
