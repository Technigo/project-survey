import React from 'react';

import './Question3.css';

const answers = ['today', 'yesterday', 'last week', "I don't know"];

const Question3 = (props) => {
    const { lastTime, setLastTime } = props;

    const onLastTimeChange = (event) => {
        setLastTime(event.target.value);
    }

    return (
        <>
            <h2>When was the last time you had it?</h2>
            <select
                onChange={onLastTimeChange}
                value={lastTime}>
                {answers.map((answer) => {
                    return <option value={answer}>{answer}</option>
                })}
            </select>
        </>
    )
}

export default Question3;