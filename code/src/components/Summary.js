import React from 'react';

const Summary = (props) => {
  return (
    <>
    <div>
      <p>So... {props.formData.name}, you like {props.formData.sushi} with {props.formData.ingredient} then?</p>
    </div>
    </>
  );
};

export default Summary;