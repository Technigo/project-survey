import React from "react";

const Thirdquestion = (props) => {
    const ageGroups = ['0-18','19-30','30+']

  return (
        <div className="section">
        <label htmlFor='name'>Guest age group!</label>
        {ageGroups.map((agegroups,key) => 
        <label htmlFor="ageGroup" key={agegroups}>
        <input 
            id="ageGroup"
            type = 'radio' 
            value={agegroups}
            onChange={(e) => props.setAgeGroup(e.target.value)} 
            checked={props.ageGroup === agegroups}
        />
        {agegroups}
        </label>
        )}
        </div>
        )
        }

export default Thirdquestion
