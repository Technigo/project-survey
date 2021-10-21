import React from "react";

const Overview = (props) => {

  // const { name, arrayAnswer, arrayAnswer2, arrayAnswer3 } = props;

  return (
    <section>

      <h2>Here are your answers {props.name}</h2>
      <h3 className="user-answers">1) What is the difference between forEach() and map() ?</h3>
      <p>{props.arrayAnswer}</p>
      <h3 className="user-answers">1) What is the difference between forEach() and map() ?</h3>
      <p>{props.arrayAnswer2}</p>
      <h3 className="user-answers">1) What is the difference between forEach() and map() ?</h3>
      <p>{props.arrayAnswer3}</p>

      
    </section>
  
  );


};
export default Overview;