import React from 'react';

import './Question3.css';

const answers = ['today', 'yesterday', 'last week', "I don't know"];

const Question3 = (props) => {
    const { username, lostItem, lastTime, setLastTime } = props;

    const handleLastTimeChange = (event) => {
        setLastTime(event.target.value);
    }

    return (
        <>
            <h2>When was the last time you had your {lostItem !== '' ? lostItem : 'lost item'}, {username !== '' ? username : 'stranger'}?</h2>
            <div className='input-container'>
                <select
                    onChange={handleLastTimeChange}
                    value={lastTime}>
                    {answers.map((answer) => {
                        return <option value={answer}>{answer}</option>
                    })}
                </select>
            </div>
        </>
    );
};

export default Question3;