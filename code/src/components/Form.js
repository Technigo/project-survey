import React from 'react';

import NameQ from './NameQ';
import ContentQ from './ContentQ';
import RecurrenceQ from './RecurrenceQ';
import EmailQ from './EmailQ';
import Summary from './Summary';

export const Form = () => {
  return (
    <>
      <NameQ />
      <ContentQ />
      <RecurrenceQ />
      <EmailQ />
      <Summary />
    </>
  )
}