import React, { useState } from 'react';
import Alert from './Alert';

const SubmitButton = ({ currentState, defaultState, setSection, message }) => {
  const [alert, setAlert] = useState(false);
  const handleSubmitButton = () => {
    if (currentState !== defaultState) {
      setSection('summary');
    } else {
      setAlert(true);
    }
  };

  return (
    <section className="form__alertAndButton">
      {alert && <Alert message={message} />}
      <button
        type="submit"
        className="button"
        onClick={handleSubmitButton}>Submit form
      </button>
    </section>
  )
}

export default SubmitButton;