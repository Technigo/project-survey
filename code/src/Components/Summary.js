import React from 'react';



const Summary = ({textHeader, numberOfBooks, favGenre, favBook}) => {

  return(
    <div className="summary-container">
        <div className="inner-container">
        <h2 className="summary-header">{textHeader}</h2>
        <p className="summary-text">You read {numberOfBooks} books in a   year.</p>
        <p className="summary-text">Your favorite genre is: {favGenre}.</p>
        <p className="summary-text">Your favoritebook is: {favBook}.</p>
        </div>
      </div>
  )
};

export default Summary;