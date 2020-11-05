import React from 'react'

export const Submit = ({setSection, value, title}) => {
  return <div className="question">
           <input type="submit" tabIndex="0" onClick={() => {setSection(value)}} value={title} />
         </div>
}