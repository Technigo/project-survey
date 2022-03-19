import "./index.css"
import React, {useState} from 'react'
import { Form } from 'Components/Form'

export const App = () => {

  const[showModal, setShowModal]=useState(false)

  const openModal = () => {
    setShowModal(prev => !prev);
  }
  
  return(
    <>
    <main>

    <div className="main-container">
      <h1>Sign up for Space Travel</h1>
      <button onClick={openModal}>Apply now</button>
    </div>



    <div className="App">    
      <Form showModal={showModal} setShowModal={setShowModal} />
    </div>

    </main>


    </>
  );
}
