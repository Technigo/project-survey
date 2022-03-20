import React from 'react';

const Startover = (props) => {

  return (
    <div className="container">
        <button onClick={props.onClick}>Start over again</button>
    </div>
  );
};

export default Startover;