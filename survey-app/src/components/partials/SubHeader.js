import React from 'react'

const SubHeader = ({ subHeaderData }) => {
  return (
    <h2>
      <span className='symbols'>{subHeaderData.page}. </span>
      {subHeaderData.title}
      {
        (subHeaderData.page === 4 || subHeaderData.page === 5)
          ? <> 
            <span className='sub-header'>{subHeaderData.title2} <span className='symbols'> *</span></span>
            <p className='sub-header-paragraph'>0 = No change
            <span className='text-right'>5 = {subHeaderData.level}</span>
            </p>
          </>
          : <span className='symbols'> *</span>
      }
    </h2>
  )
}

export default SubHeader;