import React from 'react'

const Buttons = ( {section, setSection} ) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    setSection(5)
  }

  return (
    <div className="btn-container">

      {section >= 2 && section <= 4 && (
      <button className="button" onClick={() => setSection(section - 1)}>Previous Question</button>
      )}

      {section < 4 && (
        <button className="button" onClick={() => setSection(section + 1)}>{section === 0 ? 'START' : 'Next question'}</button>
      )}

      {section === 4 && (
        <button onClick={handleSubmit} className="button" type="submit">SEND</button>
      )}

      {section === 5 && ( 
        <button onClick={() => setSection(0)} className="button">RESTART</button>
      )}

    </div>
  )
}

export default Buttons