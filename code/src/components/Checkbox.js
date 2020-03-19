import React from 'react'
//import './checkbox.css'

export const Checkbox = props => {

const {newsLetter, setNewsLetter} = props;

  return (
    <form onSubmit={event => event.preventDefault()}>
     
   <label>
     Want News?
     <input
     type="checkbox"
     checked={newsLetter}
     onChange={event => setNewsLetter(event.target.checked)}
     />
   </label>
    
    </form>
  );
};



