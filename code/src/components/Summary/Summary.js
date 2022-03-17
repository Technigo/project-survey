import React from 'react';

import './Summary.css';

const Summary = (props) => {
    return (
        <>
          <h2>Summary</h2>
          <p>{props.username}! Here's a short summary for you!</p></>
    )
}

export default Summary;