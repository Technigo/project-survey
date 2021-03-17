import React from 'react';

const Summary = (props) => {
 const [mainDish, sideDish, condiments] = [props.mainDish, props.sideDish, props.condiments]

 
 return (
    <div class="summary-section">
    <h1>Voila! Here's what you can have for dinner:</h1>
   

    <p className="summary-text">You can have {mainDish} as your plato forte. You can have it sided with {sideDish} and a bit of {condiments} would go great with that!</p>
    <h2>Enjoy your dinner today!</h2>
    </div>
  )

}

export default Summary;