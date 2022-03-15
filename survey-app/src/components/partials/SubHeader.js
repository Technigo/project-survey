import React from 'react'

const SubHeader = ({ pageNumber, headerText, headerText2 }) => {
  return (
    <h2>
      <span className='symbols'>{pageNumber}. </span>
      {headerText}
      {
        (pageNumber === 4 || pageNumber === 5)
          ? <span className='block'>{headerText2} <span className='symbols'> *</span></span>
          : <span className='symbols'> *</span>
      }
    </h2>
  )
}

export default SubHeader;