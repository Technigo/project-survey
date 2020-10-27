import React from 'react'


export const Header = () => {
	return (
    <>
    <div className='header-section' >
			<h1 className='title' tabIndex='0'>HÖRLÜRAR</h1>
			<p className='title-line-one' tabIndex='0'> What is music to your ears !!</p>
			<p className='title-line-two' tabIndex='0'>Tell us more about your headphones...</p>
		</div>
		<div className='headphone-image' tabIndex='0'>
			  <img src='./img/headphone.svg' alt='Headphone'></img>
		</div>
    </>
  )
  }