import React from 'react';

import './Card.css';

import Content from 'components/Content/Content';
import Inputs from 'components/Inputs/Inputs';

const Card = (props) => {
  const getContent = () => {
    switch (props.contentType) {
      case 'question':
        return (
          <>
            <h3>Question {props.number}</h3>
            <p>{props.question}</p>
            <Content {...props.content} />
            <h3>My Answer</h3>
            <Inputs {...props} />
          </>
        );
      case 'submission':
        return (
          <>
            <h3>Submission</h3>
            <Content type="submit" />
          </>
        );
      case 'summary':
        return (
          <>
            <h3>Summary</h3>
            <p>Thank you for participating!</p>
            {Object.entries(props.data).map(([key, value]) => (
              <p key={key}>
                {value.optnum
                  ? value.result[value.optnum]
                  : `${value.result} ${value.answer}`}
              </p>
            ))}
          </>
        );
      default:
        return null;
    }
  };
  return <div className="card">{getContent()}</div>;
};

export default Card;
