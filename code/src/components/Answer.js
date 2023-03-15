/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import Equipments from './Equipments';

export const Answer = (props) => {
  const handleSupport = (event) => {
    props.setSupport(event.target.value)
  }
  return (
    <>
      {props.questionNumber === 1
     && <div className="answer-block"> <input className="name-input" type="text" value={props.name} onChange={(event) => props.setName(event.target.value)} /> </div>}

      {props.questionNumber === 2
     && <div className="slidecontainer answer-block">
       <input type="range" min="1" max="10" value={props.mood} className="slider mood-input" id="myRange" onChange={(event) => props.setMood(event.target.value)} />
       <div className="slider-descriptions">
         <p>terrible</p>
         <p>quite okay</p>
         <p>amazing</p>
       </div>
     </div>}

      {props.questionNumber === 3
     && <div className="answer-block">
       <select className="difficulties-select" name="Difficulties" id="difficulties" onChange={(event) => props.setDifficulties(event.target.options[event.target.selectedIndex].value)}>
         <option value="">Select your answer</option>
         <option value="Balancing work and other responsibilities at home">Balancing work and other responsibilities at home</option>
         <option value="Switching off at the end of the day">Switching off at the end of the day</option>
         <option value="Staying focused">Staying focused</option>
         <option value="My workspace">My workspace</option>
         <option value="Technical issues such as internet connection">Technical issues such as internet connection</option>
         <option value="Other">Other</option>
       </select>
     </div>}

      {props.questionNumber === 4
     && <div className="answer-block equipments-container">
       <Equipments
         equipment={props.equipment}
         setEquipment={props.setEquipment} />
     </div>}

      {props.questionNumber === 5
     && <div className="answer-block">
       <div className="support-container">
         <input
           className="support-input"
           type="radio"
           id="yes"
           name="option"
           value="Yes"
           checked={props.support === 'Yes'}
           onChange={handleSupport} />
         <label htmlFor="Yes">Yes</label>
       </div>

       <div className="support-container">
         <input className="support-input" type="radio" id="no" name="option" value="No" checked={props.support === 'No'} onChange={handleSupport} />
         <label htmlFor="No">No</label>
       </div>
     </div>}

    </>
  )
}

