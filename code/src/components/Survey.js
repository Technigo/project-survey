import React from 'react'
import Enjoy from './Enjoy'
import Feels from './Feels'
import Options from './Options'
import Coffee from './Coffee'
import Buttons from './Buttons'

const Survey = (props) => {


  return (
    <>
      <form className="form">
      {props.section === 1 && (
        <Enjoy setEnjoy={props.setEnjoy} enjoy={props.enjoy} />
      )}  

      {props.section === 2 && (
        <Feels setFeels={props.setFeels} feels={props.feels} />
      )}  

      {props.section === 3 && (
        <Options setOptions={props.setOptions} options={props.options} />
      )} 

      {props.section === 4 && (
        
         <Coffee setCoffee={props.setCoffee} coffee={props.coffee} />
         
        
      )} 

      <Buttons setSection={props.setSection} section={props.section}/>
      </form>
    </>
  )

}

export default Survey