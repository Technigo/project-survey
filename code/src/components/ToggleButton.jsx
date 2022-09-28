import React from 'react';

  
const ToggleButton = () => {
const [toggle, setToggle] = useState(false);

const handleToggle = () => {
setToggle(true);
}
  return ( 
    
    <button className='toggleButton' onClick={handleToggle}>Click here</button>
    
   );
}
 
export default ToggleButton;