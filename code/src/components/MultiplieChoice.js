
import React from 'react';

export const MultiplieChoice = ({NextQuestion, backCounter, onDelivery, Delivery}) => {
 

  return (
    <div className="container">
      <div className="delivery">
      <span className="small-heading" aria-label="Choose your ice cream flavour"> Choose your delivery option: </span>
      <select  
      name="Delivery"
      value={Delivery}
      onChange={onDelivery}
      className="dropdown"
      >
        <option key={Delivery.pickup}> Pick up at the store </option>
        <option key={Delivery.Delivery}> Delivery home</option>
      
      </select>
      </div>
      <div className="btn-container">
            <button type="button" onClick={backCounter} className="button"> Back</button>
            <button type="button" onClick={NextQuestion} className="button"> Next </button>
            
            </div>
    </div>
  )
} 