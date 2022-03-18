import React from "react";

const Thirdquestion = (props) => {
    const ageGroups = ['0-18','19-30','30+']

  return (
        <section className="question-section">
        <label htmlFor='name'>Guest age group:</label>
        {ageGroups.map((agegroups,key) => 
        <label htmlFor="ageGroup" key={agegroups} className='agegroup-label'>
        <input
            className='agegroup-input' 
            id="ageGroup"
            type = 'radio' 
            value={agegroups}
            onChange={(e) => props.setAgeGroup(e.target.value)} 
            checked={props.ageGroup === agegroups}
        />
        {agegroups}
        </label>
        )}
        </section>
        )
        }

export default Thirdquestion
