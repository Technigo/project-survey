import React from 'react';

import './Question2.css';

const lostItems = ['suitcase', 'mind', 'dog', 'energy'];

const Question2 = (props) => {
    const { username, lostItem, setLostItem } = props;

    const handleLostItemChange = (event) => {
        setLostItem(event.target.value);
    }

    return (
        <>
            <h2>Okay {username !== '' ? username : 'stranger'}, what have you lost?</h2>
            <div className='input-container'>
                {lostItems.map((item) => (
                    <label key={item}>
                        <input
                            type="radio"
                            value={item}
                            onChange={handleLostItemChange}
                            checked={lostItem === item}
                        />
                        Your {item}
                    </label>
                ))}
            </div>
        </>
    )
}

export default Question2;