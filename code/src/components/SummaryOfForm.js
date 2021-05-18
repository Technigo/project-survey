import React from 'react';
import './SummaryOfForm.css'



const SummaryOfForm = ({nameData, musicianData, instrumentData}) => {
    return (
        <div className="summary-section">
            <div className="summary">
                <h3>Your result:</h3>
                <div className="summary-result">
                    <p className="summary-questions">Your name:</p>
                    <p><b>{nameData}</b></p>
                    <p className="summary-questions">If you are a musician:</p>
                    <p><b>{musicianData}</b></p>
                    <p className="summary-questions">Instruments that you play:</p>
                    <p><b>{instrumentData}</b></p>
                </div>
            </div>
        </div>
    )
}

export default SummaryOfForm;