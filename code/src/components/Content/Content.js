import React from 'react';
import './Content.css';

import Button from 'components/Button/Button';
import { getWord } from 'actions/buttonOnClick';

const Content = ({ type, data, dataAlt }) => {
  switch (type) {
    case 'button':
      return (
        <>
          <Button
            isSubmit={false}
            action={getWord}
            otherClassName="content"
            text="Get word" />
          <p className="hidden">{data}</p>
        </>
      );
    case 'text':
      return (
        <>
          <p className="content">{data}</p>
        </>
      );
    case 'image':
      return <img className="content image" src={data} alt={dataAlt} />;
    case 'submit':
      return <Button isSubmit otherClassName="content" text="Submit" />;
    default:
      return null;
  }
};

export default Content;
