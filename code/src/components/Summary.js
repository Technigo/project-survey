import React from 'react';

const Summary = ({name, mainDish, sideDish, condiment} ) => {


  return (
    <>
    <div className="summary">
    <h1 tabIndex="0" className='summary'>Dinner will be ready soon {name}!</h1>
    <img className="dinner-image" src="assets/dinnerimage.jpg" alt="Friends toasting at dinner table" ></img>
    <p tabIndex="0" className='summary'>You can have {mainDish} with a side of {sideDish}. Don't forget to spice it up a little bit with {condiment} .</p>
    

    
    <p>Enjoy your dinner!</p>

    </div>
    <button
            className = 'restart-btn'
            type="button"
            onClick={() => window.location.reload()}>
            Restart
        </button>
      
    </>
  )
}



export default Summary;