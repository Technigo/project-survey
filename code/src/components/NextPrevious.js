import React from 'react';

const NextPrevious = (props) => {

  return (
    <div className="container forward-next">
        {/*  Only show the previous button if you are not on the first page */}
        { props.counter > 0 && <button onClick={() =>props.setCounter(props.counter - 1)}>Previous question</button> }
        <button onClick={() =>props.setCounter(props.counter + 1)}>Next question</button>
    </div>
  );
};

export default NextPrevious;