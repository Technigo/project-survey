import React from 'react'

import Tech from './Tech'
import Hours from './Hours'
import Pets from './Pets'
import Coffee from './Coffee'
import ProgressBar from './ProgressBar'
import Buttons from './Buttons'

const Survey = (props) => {

  const isSurveyComplete = () => {

    if (props.tech === '') {
      return false;
    }
    if (props.hours === '') {
      return false;
    }
    if (props.pets === 'Choose below') {
      return false;
    }
    if (props.coffee === '') {
      return false;
    }
    return true;
  };

  return (
    <>
      <form className="form">
      {props.section === 1 && (
        <Tech setTech={props.setTech} tech={props.tech} />
      )}  

      {props.section === 2 && (
        <Hours setHours={props.setHours} hours={props.hours} />
      )}  

      {props.section === 3 && (
        <Pets setPets={props.setPets} pets={props.pets} />
      )} 

      {props.section === 4 && (
        <>
         <Coffee setCoffee={props.setCoffee} coffee={props.coffee} />
         <p>{isSurveyComplete ? 'You are ready to send in your answers!' : 'We are missing some answers, please go back and answer all questions'}</p>
        </>
      )} 

      {props.section > 0 && props.section < 5 && (
        <ProgressBar section={props.section} />
      )} 
      <Buttons setSection={props.setSection} section={props.section}/>
      </form>
    </>
  )

}

export default Survey