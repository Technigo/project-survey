import React from 'react';
import EditAnswerButton from './EditAnswerButton';
import ExitButton from './ExitButton';

const Summary = ({ 
  userName,
  userAge,
  email,
  userCarModels,
  reasonsToBuy,
  userRating,
  textMessage,
  handleAnswerChange,
  handleExitButton
 }) => {
    const carModels = userCarModels.map(({ label }) => label);

    return (
        <div className="summary" id="sectionSummary">
            <div className="wrapper">
                <h2 className="summary-title">Thank you for your feedback!</h2>
                <p className="summary-sub-title">Below is your answer to the survey:</p>
                <div className="summary-message-container">
                    <p className="summary-message">Your Name: {userName}</p>
                </div>
                <div className="summary-message-container">
                    <p className="summary-message">Your Age: {userAge}</p>
                </div>
                <div className="summary-message-container">
                    <p className="summary-message">Your Email: {email}</p>
                </div>
                <div className="summary-message-container">
                    <p className="summary-message">The Suzuki car models you have: {carModels.join(', ')}</p>
                </div>
                <div className="summary-message-container">
                    <p className="summary-message">Reasons you bought Suzuki car(s): {reasonsToBuy.join(', ')}</p>
                </div>
                <div className="summary-message-container">
                    <p className="summary-message">Your opinion about the Aftersales Services of Suzuki is: {userRating}</p>
                </div>
                <div className="summary-message-container">
                    <p className="summary-message">Your message: {textMessage}</p>
                </div>
                <div className="summary-buttons">
                    <EditAnswerButton
                    onAnswerChange={handleAnswerChange} />
                    <ExitButton
                    onExit={handleExitButton} />
                </div>
            </div>
        </div>
    );
}

export default Summary;