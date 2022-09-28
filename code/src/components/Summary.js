import React from 'react';

const Summary = ({ name, cakeOption, quality, service, opinion }) => {
  return (
    <>
      <p>{name}{''}</p>
      <p>{cakeOption}</p>
      <p>{quality}</p>
      <p>{service}</p>
      <p>{opinion}</p>
    </>
  );
}

export default Summary;