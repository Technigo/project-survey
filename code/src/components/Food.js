import React from 'react';


export const Food = ({ food, setFood }) => {
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  }

  return (

    <div className="food-box">

<p> What is your favourite food?</p>
<input type="text" value={food} onChange={handleFoodChange} />
    </div>
  )

}