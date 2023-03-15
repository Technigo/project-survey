import React from 'react';
import { GiOfficeChair } from '@react-icons/all-files/gi/GiOfficeChair';
import { GiDesk } from '@react-icons/all-files/gi/GiDesk';
import { GiKeyboard } from '@react-icons/all-files/gi/GiKeyboard';
// import keyboardMouse from './images/keyboardMouse.jpg'

// import officeChair from './images/officeChair.jpg'
// import workspace from './images/workspace.jpg'

const equipmentArray = []
const Equipments = (props) => {
  const handleEquipments = (newEquipment) => {
    if (!props.equipment.includes(newEquipment)) {
      equipmentArray.push(newEquipment)
      props.setEquipment(equipmentArray)
      console.log(equipmentArray)
      console.log(props.equipment)
    } else {
      const equipmentToRemoveIndex = equipmentArray.indexOf(newEquipment);
      equipmentArray.splice(equipmentToRemoveIndex, 1);
      props.setEquipment(equipmentArray)
      console.log(props.equipment)
    }
  }
  return (
    <>
      <button type="button" className="equipment-btn" id="keyboard_mouse" onClick={() => handleEquipments('Keyboard or mouse')}>
        <GiKeyboard className="equipment-logo" />
        <p>Keyboard or mouse</p>
      </button>
      <button type="button" className="equipment-btn" id="office_chair" onClick={() => handleEquipments('Office chair')}>
        <GiOfficeChair className="equipment-logo" />
        <p>Ergonomic office chair</p>
      </button>
      <button type="button" className="equipment-btn" id="workspace" onClick={() => handleEquipments('Workspace')}>
        <GiDesk className="equipment-logo" />
        <p>A space that is only used for work</p>
      </button>
    </>
  )
}

export default Equipments;
