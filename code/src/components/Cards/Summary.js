import React from 'react';

const Summary = ({ data }) => {
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setForm((prevState) => ({ ...prevState, [name]: value }));
  // };

  return (
    <>
      <div className="card">
        <h3>Summary</h3>
        <p>Thank you for participating!</p>
        {Object.entries(data).map(([key, value]) => (
          <p key={key}>{value}</p>
        ))}

      </div>
    </>
  );
};

export default Summary;
