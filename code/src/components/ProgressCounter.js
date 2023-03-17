import React from 'react';

const ProgressCounter = ({ counter }) => {
  return (
    <div className="progressCounter">
      {counter > 0 && (
        `Progress: ${counter}/4`
      )}
    </div>
  )
}

export default ProgressCounter;