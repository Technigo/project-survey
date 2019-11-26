import React, {useState} from 'react' 
import './app.css'
import { Summary } from 'Summary';

export const App = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  const [color, setColor] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  
  return (
    
    <div className="formStyle">
    <form onSubmit={event => event.preventDefault()}>
        
        <h1>Home Sweet Home</h1>
        <h2>cat adoption</h2>
       
        <p>Your name</p>
        <input className="formField"
          type="text" 
          onChange={(event)=> setName(event.target.value)} 
          value={name}/>
     
    <label>
       <p> Newsletter?</p>
        <input
        type="checkbox"
        checked={wantsNewsletter}
        onChange={event => setWantsNewsletter(event.target.checked)}/>
        </label>
 

      {/*dropdown*/}
      
        <p>Choose the option that suits you the best</p>
        <select className="formDropdown" onChange={event=> setGender(event.target.value)}
          value={gender}>
          <option value="">King or Queen?</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="any">Any</option>
        </select>
     

       {/*radiobuttons*/}
      <label>
      <p>white</p>
        <input className="radioButton"
          type="radio"
          value="White"
          onChange={event => setColor(event.target.value)}
          checked={color==="White"}/>
           

        <p>Black</p>
        <input className="radioButton"
          type="radio"
          value="Black"
          onChange={event => setColor(event.target.value)}
          checked={color==="Black"}/>
         
        <p>Grey</p>
        <input className="radioButton"
          type="radio"
          value="Grey"
          onChange={event => setColor(event.target.value)}
          checked={color==="Grey"}/>
          </label>
       

         {/*submitbutton*/}
        <button onClick={()=> setSubmitted(true)}>Submit</button>
    </form>
    {submitted && <Summary name={name} gender={gender} color={color} />}
    </div>

    
    
     
   
   

  );
};




