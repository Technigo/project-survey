import React from 'react'
// import Thirdquestion from './Thirdquestion'

const Secondquestion = (props) => {
  // const [showAgegroup, setShowAgegroup] = useState(false)

  const handlePersonnumber = (e) => {
    props.setPersonNumber(e.target.value)
    props.setError('')
    }

  console.log('count:',props.count)

  return (
    <>
    <section className='question-section'>
       <label htmlFor='personNumber' tabIndex={0}>How many guest:</label>
       <select 
            id='personNumber'
            onChange={handlePersonnumber}
            value={props.personNumber}>
                <option value="no">Only me</option>
                <option value="1">1 person</option>
                <option value="2">2 person</option>
                <option value="3">3 person</option>
        </select>
    </section>
    
      {/* {showAgegroup && <Thirdquestion />} */}
    
    </>
  )
}

export default Secondquestion

