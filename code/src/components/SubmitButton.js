import React, { useState } from 'react';

// External
import 'firebase/database';
import firebase from 'firebase/app';

// Components
import Popup from 'components/Popup';

// ----------------------------------------------------------------

const SubmitButton = ({
  currentState,
  defaultState,
  setSection,
  message,
  name,
  ageGroup,
  skills,
  suggestions,
  title,
}) => {
  const [popup, setPopup] = useState(false);

  const handleSubmitButton = () => {
    if (currentState !== defaultState) {
      setSection('summary');
      saveMessage(name, ageGroup, skills, suggestions, title); // Save message
    } else {
      setPopup(true);
    }
  };

  // Reference messages collection
  const messagesRef = firebase.database().ref('messages');

  // Save messages to Firebase
  const saveMessage = (name, ageGroup, skills, suggestions, title) => {
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
      Name: name,
      Agegroup: ageGroup,
      Skills: skills,
      Suggestions: suggestions,
      Title: title,
    });
  };

  return (
    <>
      {popup && <Popup message={message} classNames="form__popup" />}

      <button
        type="submit"
        value="Submit"
        className="form__submit-button"
        onClick={handleSubmitButton}
      >
        Submit
      </button>
    </>
  );
};
export default SubmitButton;
