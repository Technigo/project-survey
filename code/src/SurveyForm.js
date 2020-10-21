import React, { useState } from 'react';

import UserName from './UserName';
import UserAge from './UserAge';
import Occupation from './Occupation';
import UserCarModels from './UserCarModels';
import ReasonsToBuy from './ReasonsToBuy';
import UserRating from './UserRating';
import TextMessage from 'TextMessage';
import SubmitButton from './SubmitButton';
import Summary from './Summary';
import SnapSection from './SnapSection';

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
    setCarModels(newCars)
  }

  const handleReasonsChange = reasonValue => {
    reasons.includes(reasonValue)
        ? setReasons(reasons.filter(item => item !== reasonValue) )
        : setReasons( [...reasons, reasonValue] );
  };

  const handleRatingChange = newRating => {
    setUserRating(newRating);
    window.location.hash = "#sectionMessage";
  };

  const handleMessageChange = newMessage => {
    setTextMessage(newMessage)
  }

  const handleSubmit = () => {
    setShowSummary(true);
    window.location.hash = "#sectionSummary";
  }
/*When users want to edit the answer, the summary will be hidden, and the form will be shown, starting with userName section */
  const handleAnswerChange = () => {
      setShowSummary(false)
      window.location.hash = "#sectionUserName";
  };
/* If users are happy with the summary, they can exit the survey and will be directed to the page header*/
  const handleExitButton = () => {
      setShowSummary(false)
      window.location.hash = "#header";
  }

  return (
    <div>
      {!showSummary &&
        <form id="surveyForm" className="survey-container" onSubmit={event => event.preventDefault()}>
          <SnapSection>
            <UserName
              userName={name}
              onNameChange={handleNameChange}
            />
          </SnapSection>
          <SnapSection>
            <UserAge
              userAge={age}
              onAgeChange={handleAgeChange} 
            />
          </SnapSection>
          <SnapSection>
            <Occupation
              occupation={occupation}
              onOccupationChange={handleOccupationChange}
            />
          </SnapSection>
          <SnapSection>
            <UserCarModels
              carModels={carModels}
              onCarsChange={handleCarsChange}
            />
          </SnapSection>
          <SnapSection>
            <ReasonsToBuy
              userReasons={reasons}
              onReasonsChange={handleReasonsChange}
            />
          </SnapSection>
          <SnapSection>
            <UserRating
              userRating={userRating}
              onRatingChange={handleRatingChange}
            />
          </SnapSection>
          <SnapSection>
            <TextMessage
              textMessage={textMessage}
              onMessageChange={handleMessageChange}
            />
            <SubmitButton
              doSubmit={handleSubmit}
            />
          </SnapSection>
        </form>
      }
      {showSummary &&
        <SnapSection>
          <Summary 
            userName={name}
            userAge={age}
            occupation={occupation}
            userCarModels={carModels}
            reasonsToBuy={reasons}
            userRating={userRating}
            textMessage={textMessage}
            handleAnswerChange={handleAnswerChange}
            handleExitButton={handleExitButton}
          />
        </SnapSection>
      }
    </div>
  );
}


export default SurveyForm;