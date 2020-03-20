import React from "react";

export const Summary = props => {
  const { name } = props;
  const { phoneNumber } = props;
  const { location } =props;
  const { ageGroup } =props;
  const { provideGroceries } =props;
  const { provideMedication } =props; 
  const { provideMealDeliveryServices } =props;
 

  return (
    <section>
      <h1>{name},</h1>
      <h2>Thank you for volunteering!</h2>
      
      <h6>Your registration:</h6>
      <p>Name: {name}</p>
      <p>Phone number: {phoneNumber}</p>
      <p>Area:{location}</p>
      <p>Age: {ageGroup}</p>
         <p>{provideGroceries}</p>
         <p>{provideMedication}</p>
         <p>{provideMealDeliveryServices}</p>
      <h4>We will get in touch with you as soon as possible.</h4>
    </section>
  );
};
