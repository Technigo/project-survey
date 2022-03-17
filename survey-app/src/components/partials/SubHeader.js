import React from 'react'

const SubHeader = ({ subHeaderData }) => {
  const { page, title, title2, level } = subHeaderData;

  return (
    <h2>
      <span className='symbols'>{page}. </span>
      {title}
      {
        (page === 4 || page === 5)
          ? <> 
            <span className='sub-header'>{title2} <span className='symbols'> *</span></span>
            <p className='sub-header-paragraph'>0 = No change
            <span className='text-right'>5 = {level}</span>
            </p>
          </>
          : <span className='symbols'> *</span>
      }
    </h2>
  )
}

export default SubHeader;