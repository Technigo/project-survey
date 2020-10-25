import React from 'react';

import 'Styles/form.css'
import 'Styles/buttons.css'

const Buttons = props => {

  return ( 
    <button
      type="submit"
      onClick={()=> {props.setSection(props.value)}}
      disabled={props.disabled}
     className="btn" >
      {props.name}
    </button>
  )
}

export default Buttons;