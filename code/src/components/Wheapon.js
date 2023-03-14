import React from 'react'

export const Wheapon = ({ wheapon, setWheapon}) => {
    const handleWheaponChange = (event) => {
        setWheapon(event.target.value);
    }

return (


    <div className='wheapon'>

<form>

<select onChange = { event => setWheapon(event.target.value)} >

          <option value=" "> Select wheapon </option>
          <option value="Arsenik">Arsenik</option>
          <option value="Bullet">Bullet</option>
          <option value="snowstorm">snowstorm</option>
</select>
</form>


    </div>
)




}