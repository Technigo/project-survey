import React from 'react';

import './Summary.css'

const Summary = ({ inputName, genre, cost, selectBigVenue, selectMidVenue, selectSmallVenue, range }) => {
    
  return (
<>
    <section className="summary">

      <div className="summary-text">
      <h2>Hey <span className="color-word">{inputName}</span>!</h2> 
      </div>

      <div className="summary-text">
      <h2>So, your favourite music genre is <span className="color-word">{genre}</span> - cool!</h2>  
      </div>

      <div className="summary-text">
      <h2>Prior to the panemic you usually spent <span className="color-word">{cost} kr</span> on live gigs each month - hopefully worth every penny!</h2>
      </div>

      <div className="summary-text">
      <h2>Your favourite big sized live music venue in Stockholm is <span className="color-word">{selectBigVenue}</span> - perfectly understandble!</h2> 
      </div>

      <div className="summary-text">
      <h2>Your favourite medium sized live music venue in Stockholm is <span className="color-word">{selectMidVenue}</span> - I hear ya!</h2> 
      </div>

      <div className="summary-text">
      <h2 >Your favourite small sized live music venue in Stockholm is <span className="color-word">{selectSmallVenue}</span> - mine too!</h2> 
      </div>

      <div className="summary-text">
      <h2>On a scale from 1-10, you miss live music at a level of <span className="color-word">{range}</span> - fair enough!</h2> 
      </div>

      <section className="end-container">
      <div className="end-message">
        <h2 className="end-text">THANK YOU FOR YOUR PARTICIPATION <span role="img" aria-label="waving hand emoji">🤘</span></h2>
      </div>
      </section>

    </section>
    </>
  );
};

export default Summary;