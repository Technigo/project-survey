import React from "react";

const Thirdquestion = (props) => {
    const deptGroup = ['.NET','Frontend','UI/UX','E-Commerce']

    const handleAgegroup = (e) => {
        props.setAgeGroup(e.target.value)
        props.setError('')
    }
    
  return (
        <section className="question-section">
        <label htmlFor='name' tabIndex={0}>Dept. name:</label>
        {deptGroup.map((deptGroup,key) => 
        <label htmlFor="ageGroup" key={deptGroup} className='agegroup-label' tabIndex={0}>
        <input
            className='agegroup-input' 
            id="ageGroup"
            type = 'radio' 
            value={deptGroup}
            onChange={handleAgegroup} 
            checked={props.ageGroup === deptGroup}
            tabIndex={0}
        />
        {deptGroup}
        </label>
        )}
        </section>
        )
        }

export default Thirdquestion
