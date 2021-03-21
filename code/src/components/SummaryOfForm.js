import React from 'react';



const SummaryOfForm = ({nameData, musicianData, instrumentData}) => {
    return (
        <div className="summary-section">
            <div className="summary">
                <h3>Your result:</h3>
                <p>Your name:</p>
                <p>{nameData}</p>
                <p>Are you a musician?</p>
                <p>{musicianData}</p>
                <p>What instrument do you play?</p>
                <p>{instrumentData}</p>
            </div>
        </div>
    )
}

export default SummaryOfForm;