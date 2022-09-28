import React from 'react';
import ContentQ from './ContentQ';
import EmailQ from './EmailQ';
import NameQ from './NameQ';
import RecurrenceQ from './RecurrenceQ';

const Summary = () => {
  return (
    <div className="container">
      <p>Summary</p>
      <p>Name: {NameQ}</p>
      <p>Content: {ContentQ}</p>
      <p>Recurrence: {RecurrenceQ}</p>
      <p>Email: {EmailQ}</p>
    </div>
  )
}

export default Summary