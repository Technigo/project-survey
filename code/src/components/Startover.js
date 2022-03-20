import React from 'react';

const Startover = (props) => {

  return (
    <div class="container">
        <button onClick={props.onClick}>Start over again</button>
    </div>
  );
};

export default Startover;