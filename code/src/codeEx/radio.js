import React, { useState } from "react";
import "./styles.css";


const ageGroup = ["0-18", "19-30", "30+"];


export const Radio = () => {

  const [ageGroup, SetAgeGroup] = useState()

  return (
    <form>
      Age Group:
      {ageGroup.map(group => (
        <label key={group}>
          <input className
            type="radio"
            value={group}
            onChange={event => SetAgeGroup(event.target.value)}
          />
          {group}
        </label>
      ))}
    </form>



  )
}