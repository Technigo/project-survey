import React from 'react';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Alert = ({ message }) => {
  return (
    <div role="alert" id="form__alert" className="alert enabled">
      <FontAwesomeIcon icon={faTriangleExclamation} id="alert-icon" />
      <div id="form-error">
        {message}
      </div>
    </div>
  )
}

export default Alert;