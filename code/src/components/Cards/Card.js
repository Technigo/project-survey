import React from 'react';

import './Card.css';

import Content from 'components/Content/Content';
import Inputs from 'components/Inputs/Inputs';

const Card = ({ contentType, number, question, content, data, ...props }) => {
  const getContent = () => {
    switch (contentType) {
      case 'question':
        return (
          <>
            <h3>Question {number}</h3>
            <p>{question}</p>
            <Content {...content} />
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
            {Object.entries(data).map(([key, value]) => (
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
