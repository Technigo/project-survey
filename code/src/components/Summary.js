import React from 'react';

const Summary = (props) => {
 const [mainDish, sideDish, condiments] = [props.mainDish, props.sideDish, props.condiments]

 
 return (
    <div className="summary-section">
    <h1>Voilà! Here's what you can have for dinner:</h1>
   

    <p className="summary-text">You can have {mainDish} as a main course. You can have it sided with {sideDish} and a bit of {condiments} would go great to add some extra punch to it!</p>
    <h2>Enjoy your dinner today!</h2>
    </div>
  )

}

export default Summary;