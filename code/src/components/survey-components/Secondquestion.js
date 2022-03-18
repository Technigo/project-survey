import React from 'react'

const Secondquestion = (props) => {

  return (
    <section className='question-section'>
       <label htmlFor='personNumber'>How many guest:</label>
       <select 
            id='personNumber'
            onChange={(e)=>props.setPersonNumber(e.target.value)} 
            value={props.personNumber}>
                <option value="0">Just me</option>
                <option value="1">1 person</option>
                <option value="2">2 person</option>
                <option value="3">3 person</option>
        </select>
    </section>
  )
}

export default Secondquestion
