import React from 'react';

// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Alert = ({ message }) => {
  return (
    <div role="alert" id="form-alert" className="alert enabled">
      <div id="form-error">
        <FontAwesomeIcon icon={faTriangleExclamation} id="alert-icon" />
        {message}
      </div>
    </div>
  )
}

export default Alert;