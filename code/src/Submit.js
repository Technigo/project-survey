import React, { useState } from 'react'
import "./Components/submit.css";


export const Submit = (props) => {

    return <div className="SubmitText">
        <p style={{ color: props.temperature }}>Welcome {props.temperature}san! <br></br>You're now a part of the Turtle Ninja crew!
        </p>
        <p style={{ color: props.location }}>Your ninja colour: {props.location}</p>
        <p style={{ color: props.group }}>Your ninja weapon: {props.group}</p>
    </div>
};
//export const Submit = (props) => {
  //  return (
  //    <div className="summary">
  //      <h2>Thank you for your answers {""}!</h2>
  //      <p>#1: {props.location}</p>
  //    </div>
  //  )
 // }
  
  
  
  //export const Submit = () => {
    //const [submit, setSubmit] = useState(false)

//False because form is not submitted from start (initial value)
//const [submitted, setSubmitted] = useState(false)

//Submit button with onClick event to set value true to submitted
    //<button onClick={() => 
        //setSubmit(true)} 
        //type="submit">Submit
    //</button>

//Reacts kind of condition: if submitted then show the following component Summary. You could put JSX here instead of in a component too
   // {submitted && <Summary temperature={temperature} 
//}
    
        //<form>
          //  <h3>Click!</h3>
            //<button
              //  onClick={() => setSubmit(true)}
            //>SUBMIT
            
            //</button>
            //{Submit && <Submit temperature={temperature}
        //</form>
       
       
    //);   
//}


