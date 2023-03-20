/* eslint-disable indent */
import React from 'react';

const Summary = ({ summaryList, resetForm }) => {
    return (
        <div>
            <h3>Summary:</h3>
            <ul>
                {summaryList.map((item) => <li>{item}</li>)}
            </ul>
            <div className="btnSection">
                <button className="button" type="button" onClick={resetForm}>Reset</button>
            </div>
        </div>
    )
}

export default Summary