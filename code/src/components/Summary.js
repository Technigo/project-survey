import React from 'react';

export const Summary = ({ name, area, experience, calls, company }) => {
  return (
    <>
      <p>Thank you {name} Please confirm your answers</p>

      <li>
        <ul> Area of interest:  {area} area </ul>
        <ul>Your years of experience:  {experience}</ul>
        <ul>calls per month with your mentor:  {calls}</ul>
        <ul>Mentor Working in:  {company} company</ul>
      </li>

      <p> Confirm your answers by clicking Next </p>
    </>
  );
}
