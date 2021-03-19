import React from 'react';

const RestartButton = () => {
  return (
    <button className="start-next-button" onClick={() => window.location.reload()}>
      Restart survey
    </button>
  )
}

export default RestartButton