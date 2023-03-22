import React from 'react';
import { GiOfficeChair } from '@react-icons/all-files/gi/GiOfficeChair';
import { GiDesk } from '@react-icons/all-files/gi/GiDesk';
import { GiKeyboard } from '@react-icons/all-files/gi/GiKeyboard';

const equipmentArray = []
const Equipments = (props) => {
  const handleEquipments = (newEquipment) => {
    const newEquipmentId = newEquipment.toLowerCase().replaceAll(' ', '_')

    if (!props.equipment.includes(newEquipment)) {
      equipmentArray.push(newEquipment)
      props.setEquipment(equipmentArray)
      document.getElementById(newEquipmentId).classList.add('on')
      console.log(props.equipment)
    } else {
      const equipmentToRemoveIndex = equipmentArray.indexOf(newEquipment);
      equipmentArray.splice(equipmentToRemoveIndex, 1);
      document.getElementById(newEquipmentId).classList.remove('on')
      props.setEquipment(equipmentArray)
      console.log(props.equipment)
    }
  }
  return (
    <>
      <button type="button" className="equipment-btn keyboard_or_mouse" id="keyboard_or_mouse" onClick={() => handleEquipments('Keyboard or mouse')}>
        <GiKeyboard className="equipment-logo" />
        <p>Keyboard or mouse</p>
      </button>
      <button type="button" className="equipment-btn office_chair" id="office_chair" onClick={() => handleEquipments('Office chair')}>
        <GiOfficeChair className="equipment-logo" />
        <p>Ergonomic office chair</p>
      </button>
      <button type="button" className="equipment-btn workspace" id="workspace" onClick={() => handleEquipments('Workspace')}>
        <GiDesk className="equipment-logo" />
        <p>A space that is only used for work</p>
      </button>
    </>
  )
}

export default Equipments;
