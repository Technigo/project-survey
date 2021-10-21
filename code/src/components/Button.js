import React from 'react'
import DownArrow from 'assets/icons/down-arrow.svg'
import UpArrow from 'assets/icons/up-arrow.svg'
import 'components/button.css'

export const Button = ({ disabled, onClick, text, type }) => {
  const handleKeyDown = e => {
    if (type === 'down' && (e.key === 'Enter' || e.keyCode === '39')) {
      onClick()
    }
  }
  return (
    <button className={'button'} disabled={disabled} onClick={onClick}>
      {type === 'down' && (
        <img className='button-icon' src={DownArrow} alt='down-arrow' onKeyDown={handleKeyDown} />
      )}
      {type === 'up' && <img className='button-icon' src={UpArrow} alt='up-arrow' />}
      {text}
    </button>
  )
}
