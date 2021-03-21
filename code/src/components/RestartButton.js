import React from 'react'


//css for this button is inside StartNewxtButton.css
const RestartButton = () => {
  return (
    <button className="start-next-button" onClick={() => window.location.reload()}>
      Restart survey
    </button>
  )
}

export default RestartButton