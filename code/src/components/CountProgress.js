import React from 'react';

const CountProgress = ({ counter }) => {
  return (
    <div className="countprogress">
      {counter > 0 && (
        `Progress: ${counter}/7`
      )}
    </div>
  )
}

export default CountProgress;