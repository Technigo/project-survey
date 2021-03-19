import React from 'react';



const Summary = ({textHeader, numberOfBooks, favGenre, favBook}) => {

  return(
    <div className="summary-container">
        <div className="inner-container">
        <h2 tabIndex="0" className="summary-header">{textHeader}</h2>
        <p tabIndex="0" className="summary-text">You read {numberOfBooks} books in a   year.</p>
        <p tabIndex="0" className="summary-text">Your favorite genre is: {favGenre}.</p>
        <p tabIndex="0" className="summary-text">Your favoritebook is: {favBook}.</p>
        </div>
      </div>
  )
};

export default Summary;