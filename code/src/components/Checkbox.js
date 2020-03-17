import React, {useState} from 'react'
//import './checkbox.css'

export const Checkbox = () => {

const [newsLetter, setNewsLetter] = useState(false);

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



