/* eslint-disable linebreak-style */
/* eslint-disable indent */

import React from 'react';

const ProgressBar = ({ percent }) => {
    // const { bop, setBop } = props;
    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${percent}%` }}>
                {percent}%
            </div>
        </div>
    )
}

export default ProgressBar;