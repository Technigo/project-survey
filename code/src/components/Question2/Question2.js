import React from 'react';

import './Question2.css';

const lostItems = ['mind', 'suitcase', 'dog', 'wallet'];

const Question2 = (props) => {
    const { username, lostItem, setLostItem } = props;

    const onLostItemChange = (event) => {
        setLostItem(event.target.value);
    }

    return (
        <>
          <h2>Okay {username !== '' ? username : 'stranger'}, what have you lost?</h2>

          {lostItems.map((item) => (
              <label key={item}>
                  <input 
                    type="radio"
                    value={item}
                    onChange={onLostItemChange}
                    checked={lostItem === item}
                  />
                  Your {item}
              </label>
          ))}
        </>
    )
}

export default Question2;