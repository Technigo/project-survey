import React from 'react';
import './summary.css'

export const Summary = (props) => {
  const reloadPage = () => {
    window.location.reload();
  }

  return (
    <div className="summaryContainer">
      <div className="summaryWrapper">
        <h3 className="summaryTitle">Alright {props.name}! Let's sum up: </h3>
        <p>We will see you there on {props.dayPreference}... That's great! </p>
        <p>We are glad to hear that you feel {props.feeling} about it.</p>
        <p>Apparently, you would rather go for {props.foodPreference}... We assume that it was a tough decision to take!</p>
        <p>And we will make sure that you do not find any odd ingredients ({props.allergy}) in your plate <span role="img" aria-label="black heart">🖤</span></p>
        <iframe style={{ borderRadius: 100 }} src="https://giphy.com/embed/Lb4IZLmCfALhm" width="180" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
      <button className="restartSummary" onClick={reloadPage}>Restart</button>
    </div>
  )
}
