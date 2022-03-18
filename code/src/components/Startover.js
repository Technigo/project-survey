import React from 'react';

const Startover = (props) => {

  return (
    <button onClick={() =>props.setCounter(props.counter === 0)}>Start over again</button>
  );
};

export default Startover;