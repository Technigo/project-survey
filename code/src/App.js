import React from 'react'

import Form from './components/Form'


export const App = () => {
  return (
    <div className="content-wrapper">
      <div className="image-container"> 
        <img src="./assets/picture.svg" className="image" alt="Beach and sunshine"/>
        <img src="./assets/picture1.svg" className="image" alt="Beach and sunshine"/>
      </div>
      <Form />
      <div className="image-container"> 
        <img src="./assets/picture2.svg" className="image" alt="Beach and sunshine"/>
        <img src="./assets/picture3.svg" className="image" alt="Beach and sunshine"/>
      </div>
    </div>
  )
}
