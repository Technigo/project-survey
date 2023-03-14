/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import keyboardMouse from './images/keyboardMouse.jpg'
import officeChair from './images/officeChair.jpg'
import workspace from './images/workspace.jpg'

const equipmentArray = []
export const Answer = (props) => {
  const handleEquipments = (equipment) => {
    equipmentArray.push(equipment)
    console.log(equipmentArray)
    props.setEquipment(equipmentArray)
  }
  const handleSupport = (event) => {
    props.setSupport(event.target.value)
  }
  return (
    <>
      {props.questionNumber === 1
     && <div> <input type="text" value={props.name} onChange={(event) => props.setName(event.target.value)} /> </div>}

      {props.questionNumber === 2
     && <div className="slidecontainer">
       <input type="range" min="1" max="10" value={props.mood} className="slider" id="myRange" onChange={(event) => props.setMood(event.target.value)} />
       <div className="slider-descriptions">
         <p>terrible</p>
         <p>quite okay</p>
         <p>amazing</p>
       </div>
     </div>}

      {props.questionNumber === 3
     && <div>
       <select name="Difficulties" id="difficulties" onChange={(event) => props.setDifficulties(event.target.options[event.target.selectedIndex].value)}>
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
     && <div>
       <button type="button" className="equipment" id="keyboard_mouse" onClick={() => handleEquipments('Keyboard or mouse')}>
         <img src={keyboardMouse} alt="Keyboard and mouse by Lum3n" />
         <p>Keyboard or mouse</p>
       </button>
       <button type="button" className="equipment" id="office_chair" onClick={() => handleEquipments('Office chair')}>
         <img src={officeChair} alt="Ergonomic chair by cottonbro" />
         <p>Ergonomic desk chair</p>
       </button>
       <button type="button" className="equipment" id="workspace" onClick={() => handleEquipments('Workspace')}>
         <img src={workspace} alt="Workspace by Andrea Davis" />
         <p>A space that is only used for work</p>
       </button>
     </div>}

      {props.questionNumber === 5
     && <div>
       <div>
         <input
           type="radio"
           id="yes"
           name="option"
           value="yes"
           checked={props.support === 'yes'}
           onChange={handleSupport} />
         <label htmlFor="yes">Yes</label>
       </div>

       <div>
         <input type="radio" id="no" name="option" value="no" checked={props.support === 'no'} onChange={handleSupport} />
         <label htmlFor="no">No</label>
       </div>
     </div>}

    </>
  )
}

