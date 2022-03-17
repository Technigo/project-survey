import React from 'react';

import './Question2.css';

const Question2 = (props) => {
    return (
        <>
          <h2>Question2</h2> 
          <p>Hello {props.username}, what have you lost?</p>
          <label>
              <input type="radio" value="mind" onchange={props.onLostItemChange} />
                Your mind
          </label>
          <label>
              <input type="radio" value="suitcase" onchange={props.onLostItemChange} />
                Your suitcase
          </label>
          <label>
              <input type="radio" value="dog" onchange={props.onLostItemChange} />
                Your dog
          </label>
          <hr />
        </>
    )
}

export default Question2;