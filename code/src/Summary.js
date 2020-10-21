import React from 'react';

const Summary = ({ 
  userName,
  userAge,
  occupation,
  userCarModels,
  reasonsToBuy,
  userRating,
  textMessage
 }) => {
    const carModels = userCarModels.map(({ label }) => label);
    
    return (
        <div>
            <p>Thank you for your feedback! Below is your answer to the survey:</p>
            <div>Name: {userName}</div>
            <div>Age: {userAge}</div>
            <div>Occupation: {occupation}</div>
            <div>The Suzuki car models you have: {carModels.join(', ')}</div>
            <div>Reasons you bought Suzuki car(s): {reasonsToBuy.join(', ')}</div>
            <div>Your opinion about the Aftersales Services of Suzuki is {userRating}</div>
            <div>Your message: {textMessage}</div>
        </div>
    );
}

export default Summary;