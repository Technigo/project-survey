import React from 'react'

export const Submit = ({setSection, value, title}) => {
  return <div className="question">
           <button type="submit" tabIndex="0" onClick={() => {setSection(value)}}>{title}</button>
         </div>
}