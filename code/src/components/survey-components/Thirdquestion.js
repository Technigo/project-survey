import React from "react";

const Thirdquestion = (props) => {
    const ageGroups = ['0-18','19-30','30+']

  return (
        <section className="question-section">
        <label htmlFor='name' tabIndex={0}>Guest age group:</label>
        {ageGroups.map((agegroups,key) => 
        <label htmlFor="ageGroup" key={agegroups} className='agegroup-label' tabIndex={0}>
        <input
            className='agegroup-input' 
            id="ageGroup"
            type = 'radio' 
            value={agegroups}
            onChange={(e) => props.setAgeGroup(e.target.value)} 
            checked={props.ageGroup === agegroups}
            tabIndex={0}
        />
        {agegroups}
        </label>
        )}
        </section>
        )
        }

export default Thirdquestion
