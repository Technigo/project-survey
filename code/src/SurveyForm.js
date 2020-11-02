import React, { useState } from 'react';

import UserName from './UserName';
import UserAge from './UserAge';
import UserEmail from './UserEmail';
import UserCarModels from './UserCarModels';
import ReasonsToBuy from './ReasonsToBuy';
import UserRating from './UserRating';
import TextMessage from 'TextMessage';
import SubmitButton from './SubmitButton';
import Summary from './Summary';
import SnapSection from './SnapSection';
import NextButton from 'NextButton';

const SurveyForm = () => {
  const [name, setName] = useState ('');
  const [age, setAge] = useState('35');
  const [email, setEmail] = useState('');
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

  const handleEmailChange =  newEmail => {
    setEmail(newEmail)
  };

  const handleCarsChange = newCars => {
    setCarModels(newCars)
  };

  const handleReasonsChange = reasonValue => {
    reasons.includes(reasonValue)
        ? setReasons(reasons.filter(item => item !== reasonValue) )
        : setReasons( [...reasons, reasonValue] );
  };

  const handleRatingChange = newRating => {
    setUserRating(newRating);
    window.location.hash = "#sectionUserName";
  };

  const handleMessageChange = newMessage => {
    setTextMessage(newMessage)
  };

  const handleSubmit = () => {
    setShowSummary(true);
    window.location.hash = "#sectionSummary";
  };
/*When users want to edit the answer, the summary will be hidden, and the form will be shown, starting with userName section */
  const handleAnswerChange = (newSection) => {
      setShowSummary(false)
      window.location.hash = "#sectionCarModels";
  };
/* If users are happy with the summary, they can exit the survey and will be directed to the page header*/
  const handleExitButton = () => {
      setShowSummary(false)
      window.location.hash = "#header";
  };

  return (
    <div>
      {!showSummary &&
        <form id="surveyForm" className="survey-container" onSubmit={event => event.preventDefault()}>
          <SnapSection>
            <UserCarModels
              carModels={carModels}
              onCarsChange={handleCarsChange}
            />
            <NextButton
              sectionId="sectionReasonsToBuy"
            />
          </SnapSection>
          <SnapSection>
            <ReasonsToBuy
              userReasons={reasons}
              onReasonsChange={handleReasonsChange}
            />
            <NextButton
              sectionId="sectionUserRating"
            />
          </SnapSection>
          <SnapSection>
            <UserRating
              userRating={userRating}
              onRatingChange={handleRatingChange}
            />
          </SnapSection>
          <SnapSection>
            <UserName
              userName={name}
              onNameChange={handleNameChange}
            />
            <NextButton
              sectionId="sectionUserAge"
            />
          </SnapSection>
          <SnapSection>
            <UserAge
              userAge={age}
              onAgeChange={handleAgeChange} 
            />
            <NextButton
              sectionId="sectionUserEmail"
            />
          </SnapSection>
          <SnapSection>
            <UserEmail
              email={email}
              onEmailChange={handleEmailChange}
            />
            <NextButton
              sectionId="sectionMessage"
              disabled={!email.includes('@')}
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
            email={email}
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
};


export default SurveyForm;
