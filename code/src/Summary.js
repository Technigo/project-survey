import React from "react";
import "./summary.css";

export const Summary = props => {

  const values = Object.values(props);
  const labels = Object.keys(props);

// Taking the props and making them into arrays of labels and values to be printed out further down in the table
  return (
   <div>
    <h2>Your application summary</h2>
    <table>
      <thead>
      {labels.map(label => (
        <tablerow key={label}>{label}</tablerow>
      ))}
      </thead>
      <tbody>
      {values.map(value => (
        <tablecell key={value}> {value}</tablecell>
      ))}
      </tbody>
    </table>
     {/* Output is a table with the labels as tablehead and the answers as cells next to the table header */}
     <h2>Thank you!</h2>
     <p>We will be in touch!</p>
   </div>
  );
};
