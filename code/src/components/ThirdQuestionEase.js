import React from 'react';
import Button from './Button';

const ThirdQuestionEase = () => {
  return (
    <div>
      <p>
        3{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        How easy is it to use?
      </p>
      <div>
        <Button buttonText="0" />
        <Button buttonText="1" />
        <Button buttonText="2" />
        <Button buttonText="3" />
        <Button buttonText="4" />
        <Button buttonText="5" />
      </div>
    </div>
  );
};

export default ThirdQuestionEase;
