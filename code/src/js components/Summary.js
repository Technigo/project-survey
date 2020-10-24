import React from 'react';
import {Button2} from "js components/Button2";
import {Button3} from "js components/Button3";

export const Summary = (props) => {
return (
<>
  <section className="summary">
      <h1>Hey {props.name}! We are going to deliver your {props.drink} tomorrow to {props.address}! Enjoy! If you would like to get your coffee delivery {props.answeramount} times per week, please subscribe.</h1>
    <Button2 />
      <Button3 />
  </section>
</>
)
}