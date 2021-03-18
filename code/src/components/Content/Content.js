import React from 'react';
import './Content.css';

import Button from 'components/Button/Button';
import { getWord } from 'actions/buttonOnClick';

const Content = (props) => {
  switch (props.type) {
    case 'button':
      return (
        <>
          <Button isSubmit={false} action={getWord} otherClassName="content" text="Get word" />
          <p className="hidden">{props.data}</p>
        </>
      );
    case 'text':
      return (
        <>
          <p className="content">{props.data}</p>
        </>
      );
    case 'image':
      return <img className="content image" src={props.data} alt={props.dataAlt} />;
    case 'submit':
      return (
        <Button isSubmit otherClassName="content" text="Submit" />
      );
    default:
      return null;
  }
};

export default Content;
