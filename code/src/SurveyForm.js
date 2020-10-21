import React, { useState } from 'react';

import UserName from './UserName';
import UserAge from './UserAge';
import Occupation from './Occupation';
import UserCarModels from './UserCarModels';
import ReasonsToBuy from './ReasonsToBuy';
import UserRating from './UserRating';
import TextMessage from 'TextMessage';
import SubmitButton from './SubmitButton';
import Summary from './Summary'

const SurveyForm = () => {
  const [name, setName] = useState ('');
  const [age, setAge] = useState('');
  const [occupation, setOccupation] = useState('');
  const [carModels, setCarModels] = useState([]);
  const [reasons, setReasons] = useState([]);
  const [userRating, setUserRating] = useState();
  const [textMessage, setTextMessage] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  

  const handleNameChange = newName => {
    setName(newName);
  };

  const handleAgeChange = newAge => {
    setAge(newAge)
  };

  const handleOccupationChange =  newOccupation => {
    setOccupation(newOccupation)
  };

  const handleCarsChange = newCars => {
    console.log('newCars', newCars);
    setCarModels(newCars)
  }

  const handleReasonsChange = reasonValue => {
    reasons.includes(reasonValue)
        ? setReasons(reasons.filter(item => item !== reasonValue) )
        : setReasons( [...reasons, reasonValue] );
  };

  const handleRatingChange = newRating => {
    setUserRating(newRating)
  };

  const handleMessageChange = newMessage => {
    setTextMessage(newMessage)
  }

  const handleSubmit = () => {
    setShowSummary(true)
  }

  return (
    <div>
      {!showSummary &&
        <form id="surveyForm" className="survey-container" onSubmit={event => event.preventDefault()}>
          <UserName 
            userName={name}
            onNameChange={handleNameChange}
          />
          <UserAge
            userAge={age}
            onAgeChange={handleAgeChange} 
          />
          <Occupation
            occupation={occupation}
            onOccupationChange={handleOccupationChange}
          />
          <UserCarModels
            carModels={carModels}
            onCarsChange={handleCarsChange}
          />
          <ReasonsToBuy
            userReasons={reasons}
            onReasonsChange={handleReasonsChange}
          />
          <UserRating
            userRating={userRating}
            onRatingChange={handleRatingChange}
          />
          <TextMessage
            textMessage={textMessage}
            onMessageChange={handleMessageChange}
          />
          <SubmitButton
            doSubmit={handleSubmit}
          />
        </form>
      }
      {showSummary &&
        <Summary 
          userName={name}
          userAge={age}
          occupation={occupation}
          userCarModels={carModels}
          reasonsToBuy={reasons}
          userRating={userRating}
          textMessage={textMessage}
        />
      }
    </div>
  );
}


export default SurveyForm;