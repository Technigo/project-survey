import React, { useState } from 'react'
import { Header } from './Header'
import { Summary } from './Summary'



const CrossFitIcons = ["Tia", "Katrin", "Sarah"];

export const App = () => {
  const [reps, setReps] = useState();
  const [movement, setMovement] = useState("");
  const [icon, setIcon] = useState();
  const [submit, setSubmit] = useState(false);
  
  return (


     
  
    <section className="formContainer">
      {!submit && (
        <form className="formInput" onSubmit={event => event.preventDefault()}>
       
          <Header />
       
          <p> When did you start with CrossFit?  </p> 
       
          <div className="formButton">   
            <button onClick={() => setReps(2)}>Just started and I love it!</button>
            <button onClick={() => setReps(5)}>A couple of months and my box is the best!</button>
            <button onClick={() => setReps(24)}>It's been a couple of years now and can't imagine a life without it!</button>
            {reps == 24 && <p>Rockstar - totally agree!</p>} 
            {reps == 2 && <p>Awesome - keep it up and keep that feeling!</p>} 
            {reps == 5 && <p>Whoop, whoop - one of the best things with the sport..The community!</p>} 
          </div>

          <p> Which movement was the most fun to get the hang of? </p>
        
          <div>
                
            <select
              onChange={event => setMovement(event.target.value)}
              value={movement}
              >
              
              <option value=" ">Select your memory-movement:</option>
              <option value="handstand push-ups">Oh my, that must be the handstand push ups</option>
              <option value="chest-to-bars">Will never forget my first chest to bars..</option>
              <option value="toes-to-bars">Just have one word for ya, Toes to Bar! Boom!</option>
            
            </select>    
          </div>

          <div>
            <p>Who of the CrossFit icons would you love to meet IRL?:</p>
            {CrossFitIcons.map(group => (
              <label key={group}>
                <input
                  type="radio"
                  value={group}
                  onChange={event => setIcon(event.target.value)}
                  checked={icon === group}
                />
                {group}
              </label>
            ))} 
          </div>

          <div className="submitButton">     
            <button
            onClick={() => setSubmit(true)}
            >SUBMIT</button>
          </div>
      


        </form>
   
       
   )};
   {submit && <Summary movement={movement} icon={icon} reps={reps}/>};
    </section>
   
  );
  
 
};

