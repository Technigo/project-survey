import React from "react"


export const OrderSize = ({order, setOrder, orderSizes}) => {
    return (
  <div>
       
 {orderSizes.map(size => (
   <label key={size} className="radioSizeLabel">
    <input className="radio-input"
     type="radio"
     value={size}
     id={size}
     onChange= {event => setOrder(event.target.value)}
     checked={size === order}
   />
  {size}

  </label>
 ))}
 </div>
    )}









