import React from 'react'

const TelephoneQuestion = (props) => {

  const {telephone, setTelephone} = props;
  const onTelephoneChange = (event) => {
    console.log(`Telephone: ${event.target.value}`);
    setTelephone(event.target.value)
  };
  return (
    <div className="text-input-container">
      <label htmlFor="telephone">My Telephone Number:</label>
      <input 
        className="text-input"
        type="text" 
        id="telephone" 
        onChange={onTelephoneChange}
        value={telephone}
      />
    </div>

  )
}

export default TelephoneQuestion;