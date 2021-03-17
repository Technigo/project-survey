import React from 'react';

const Summary = (props) => {
  return (
    <>
    <section>
      <p>{props.formData.name}</p>
      <p>{props.formData.sushi}</p>
      <p>{props.formData.ingredient}</p>
    </section>
    </>
  );
};

export default Summary;