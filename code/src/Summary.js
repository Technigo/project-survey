import React from 'react';

export const Summary = (props) => {
 return (
  <section>
  <h1>Hey {props.name}! We are going to deliver your {props.drink} to {props.address}! Enjoy your coffee!</h1>
    </section>
 )
}