import React from 'react'
import './Show.css'

export const Show = ({ show, setShow} ) => {
  const handleShowChange = (event) => (
    setShow(event.target.value)
  )
  return (
    <>
      <h3 className="showPrompt">What is your favorite show?</h3>
      <form
        className="showFav"
        value={show}
        onChange={handleShowChange}>
          <div className="normalPeople">
           <img src={require('../components/Assets/normal-people.jpg')} alt='The show Normal People' /> 
          <input type="radio" value="Normal People" />
        Normal People
        </div>
        <div className="newGirl">
           <img src={require('../components/Assets/new-girl.jpg')} alt='The show New Girl' />
          <input type="radio" value="New Girl" />
        New Girl
        </div>
        <div className="madMen">
           <img src={require('../components/Assets/mad-men.jpg')} alt='The show Mad Men' />
          <input type="radio" value="Mad Men" />
        Mad Men
        </div>
        <div className="attackOnTitan">
           <img src={require('../components/Assets/aot.jpg')} alt='The show Attack on Titan' />
          <input type="radio" value="Attack On Titan" />
        Attack on Titan
        </div>
      </form>
    </>
  )
}