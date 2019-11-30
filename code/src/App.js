import React, {useState} from 'react' 
import { Summary } from 'Summary';

export const App = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [wantsNewsletter, setWantsNewsletter] = useState(false);
  {/*const [color, setColor] = useState('');*/}
  const [home, setHome] = useState('')
  const [submitted, setSubmitted] = useState(false);
  
  
  return (
  <div>{submitted && <Summary name={name} gender={gender} home={home} />}
    
   
      <div className={submitted ? 'formStyleSubmitted' : 'formStyleNotSubmitted'}>
       {!submitted && ( 
      <form className="content" onSubmit={event => event.preventDefault()}>
        <div className="pageTitle">
          <h1>Home Sweet Home</h1>
          cat adoption
        </div>
        <div className="contacts" >
          <label className="e-mail">
            <p>e-mail</p>
            <input className="formField" 
            type="e-mail" 
            placeholder="Example@gmail.com" 
            required="required"
            onChange={(event)=> setName(event.target.value)} value={name}/>
          </label>
        
     
        <label className="newsletter">
         
          <input className="checkbox"
            type="checkbox"
            checked={wantsNewsletter}
            onChange={event => setWantsNewsletter(event.target.checked)}/>
             <p> newsletter?</p>
        </label>
       
        </div>
 

      {/*dropdown*/}
      <div className="dropdown">
        <p>what are you looking for?</p>
        <select className="formDropdown" required onChange={event=> setGender(event.target.value)}
          value={gender}>
          <option value="">options</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="any">Any</option>
        </select>
        </div>
     

       {/*radiobuttons*/}
       <div className="radioButtons">
      <label >
        
        <p>what can you offer your furry new friend?</p>
        <div className="radioButton">
         
            <input 
              type="radio"
              value="citylife"
              onChange={event => setHome(event.target.value)}
              checked={home==="citylife"}/>
               <p>citylife</p>
        </div>
            

        <div className="radioButton"> 
          <input 
            type="radio"
            value="countryside"
            onChange={event => setHome(event.target.value)}
            checked={home==="countryside"}/>
            <p>countryside</p>
            </div>
          
            <div className="radioButton"> 
          <input 
            type="radio"
            value="a catfriend"
            onChange={event => setHome(event.target.value)}
            checked={home==="a catfriend"}/>
            <p>a catfriend</p>
            </div>
      </label>
      </div>
       

         {/*submitbutton*/}
         {/* Damien har detta: <button type="submit">submit</button>*/}
         <div className="buttonContainer">
        <button  className="button" onClick={()=> setSubmitted(true)}>Submit</button>
        </div>
    </form>
    )}
    
    
    </div>
    </div>
    

    
    
     
   
   

  );
};




