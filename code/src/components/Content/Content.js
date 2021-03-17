import React from 'react';
import './Content.css';

const Content = (props) => {
  const handleGetWord = (event) => {
    event.target.classList.add('hidden')
    event.target.nextElementSibling.classList.remove('hidden')
  };
  switch (props.type) {
    case 'button':
      return (
        <>
          <button className="content button" type="button" onClick={handleGetWord}>GET WORD</button>
          <p className="hidden">{props.data}</p>
        </>
      );
    case 'text':
      return (
        <>
          <p className="content">{props.data}</p>
        </>
      )
    case 'image':
      return (
        <img className="content image" src={props.data} alt={props.dataAlt} />
      )
    case 'submit':
      return (
        <button className="content button" type="submit">SUBMIT</button>
      )
    default:
      return null;
  }
};

export default Content;
