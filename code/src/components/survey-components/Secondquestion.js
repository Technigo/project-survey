import React, {useState} from 'react'

const ageGroups = ['0-18','19-30','30+']

const Secondquestion = (props) => {
  const [showAgegroup, setShowAgegroup] = useState(false)

  const handlePersonnumber = (e) => {
    props.setPersonNumber(e.target.value)
    props.setError('')
    setShowAgegroup(true)
    }

    const handleAgegroup = (e) => {
      props.setAgeGroup(e.target.value)
      props.setError('')
    }

    const ageGroupsInfo = () => {
      if(props.personNumber === 'no' || props.personNumber === ''){
        setShowAgegroup(false)
      }
      return (
        <section className="question-section">
        <label htmlFor='name' tabIndex={0}>Age group:</label>
        {ageGroups.map((agegroups,key) => 
        <label htmlFor="ageGroup" key={agegroups} className='agegroup-label' tabIndex={0}>
        <input
            className='agegroup-input' 
            id="ageGroup"
            type = 'radio' 
            value={agegroups}
            onChange={handleAgegroup} 
            checked={props.ageGroup === agegroups}
            tabIndex={0}
        />
        {agegroups}
        </label>
        )}
        </section>
        )
    }

  return (
    <>
    <section className='question-section'>
       <label htmlFor='personNumber' tabIndex={0}>How many guest:</label>
       <select 
            id='personNumber'
            onChange={handlePersonnumber}
            value={props.personNumber}>
                <option value="">Choose</option>
                <option value="1">1 person</option>
                <option value="2">2 person</option>
                <option value="3">3 person</option>
                <option value="no">Only me</option>
        </select>
    </section>
    
      {showAgegroup && ageGroupsInfo()}
    
    </>
  )
}

export default Secondquestion

