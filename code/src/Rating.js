import React, { useState } from "react";
import Rater from "react-rater"


export const Rating = () => {
  const [rate, setRate] = useState("");
  return (
    
    <Rater 
    rating={0} 
    total={5} 
    checked={rate}
    onRate={event => setRate(event.target.value)}
    interactive={false} />
    // <Rater onRate={({setRate}) => {}}/>
  )
}