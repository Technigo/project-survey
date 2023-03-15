import React from 'react';
import keyboardMouse from './images/keyboardMouse.jpg'
import officeChair from './images/officeChair.jpg'
import workspace from './images/workspace.jpg'

const Equipments = (props) => {
  const equipmentArray = [];
  const handleEquipments = (newEquipment) => {
    equipmentArray.push(newEquipment)
    console.log(equipmentArray)
    props.setEquipment(equipmentArray)
  }
  return (
    <>
      <button type="button" className="equipment-btn" id="keyboard_mouse" onClick={() => handleEquipments('Keyboard or mouse')}>
        <img src={keyboardMouse} alt="Keyboard and mouse by Lum3n" />
        <p>Keyboard or mouse</p>
      </button>
      <button type="button" className="equipment-btn" id="office_chair" onClick={() => handleEquipments('Office chair')}>
        <img src={officeChair} alt="Ergonomic chair by cottonbro" />
        <p>Ergonomic desk chair</p>
      </button>
      <button type="button" className="equipment-btn" id="workspace" onClick={() => handleEquipments('Workspace')}>
        <img src={workspace} alt="Workspace by Andrea Davis" />
        <p>A space that is only used for work</p>
      </button>
    </>
  )
}

export default Equipments;