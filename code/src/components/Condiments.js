import React, { useState } from 'react';


const Condiments = () => {
  const [condiment, setCondiment] = useState('');

  const onCondimentChange= (e) => {
    console.log(`Condiment: ${e.target.value}`);
    setCondiment(e.target.value);
  };

  return (
    <form>
    <div>
      <p>What is your go-to condiment?</p>
      <label htmlFor="mustard">Mustard</label>
      <input 
      name="condiment" 
      id="mustard"
      value={condiment} 
      type="radio" 
      onChange={onCondimentChange}  />
      <label htmlFor="mayo">Mayo</label>
      <input
      name="condiment"
      id="mayo" 
      value={condiment}
      type="radio" 
      onChange={onCondimentChange} />
      <label htmlFor="tomato">Tomato sauce</label>
      <input
       name="condiment"
       id="tomato"
       value={condiment}
       type="radio"
       onChange={onCondimentChange} />
      <label htmlFor="garlic-sauce">Garlic sauce</label>
      <input
       name="condiment"
       id="garlic"
       value={condiment}
      type="radio" 
      onChange={onCondimentChange} />
      <label htmlFor="remoulade">Remoulade</label>
      <input
       name="condiment"
       id="remoulade" 
       value={condiment}
       type="radio" 
       onChange={onCondimentChange} />
      </div>
    </form>
    );
  };


 export default Condiments;