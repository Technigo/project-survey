import React from 'react';
import './goodbyeMessage.css';

export const GoodbyeMessage = (props) => {

  const reloadPage = () => {
    window.location.reload();
  }
  return (
    <div className="containerBye">
      <h2 className="byeTitle">Oh noooo</h2>
      <iframe title="sadGif" style={{ width: 200, height: 200, borderRadius: 100 }} src="https://giphy.com/embed/3o6YghZV15YGZoOtIk" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p className="byeText">You will be missed</p>
      <button onClick={reloadPage}>Restart
      </button>
    </div>
  )
}