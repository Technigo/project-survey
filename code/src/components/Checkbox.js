import React from 'react'

export const Checkbox = props => {

const {newsLetter, setNewsLetter} = props;

  return (
    <form onSubmit={event => event.preventDefault()}>
     
   <label>
     Want to learn more about React?
     <input
     type="checkbox"
     checked={newsLetter}
     onChange={event => setNewsLetter(event.target.checked)}
     />
   </label>
    
    </form>
  );
};



