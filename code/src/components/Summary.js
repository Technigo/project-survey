import React from 'react';

const Summary = ({dish, dish2, condiment} ) => {



  const onButtonClick= (e) => {
    console.log(`Summary: ${e.target.value}`);
    onButtonClick(e.target.value);
}

  return (
    <>
    <div className="summary-section">
    <h1>Dinner will be ready soon!</h1>
    <img className="dinner-image" src="assets/dinnerimage.jpg" alt="Friends toasting at dinner table" ></img>
    <button onClick={onButtonClick} className="button" type="submit" value="submit">SEND</button>
    <h2>Think no more. Here's what you can have today:</h2>

    <p className="summary-text">You can have {dish} with a side of {dish2}. Don't forget to spice it up a little bit with {condiment} .</p>
    <p>Enjoy your dinner!</p>

    </div>
    </>
  )
}



export default Summary;