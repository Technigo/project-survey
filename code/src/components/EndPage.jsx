import React from 'react';

const refreshPage = () => {
    window.location.reload();
}

const EndPage = () => {
    return (
        <div className="page-container">
            <h2>Thank you for your participation!</h2>
            <p>We hope you enjoyed the survey. Feel free to restart the survey using the "Restart" button.</p>
            <div className="button-container">
            <button className="restart-button" onClick={refreshPage}>Restart</button>
            </div>
        </div>
    )
}

export default EndPage