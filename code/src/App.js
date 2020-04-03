import React, {useState} from 'react'
import { FirstName } from 'FirstName';
import { SecondName } from 'SecondName';
import { Email } from 'Email';
import {Location} from 'Location';
import {OrderSize} from 'OrderSize';
import {Specials} from 'Specials';
import {Summary} from 'Summary';
import {Submit} from 'Submit';


export const App = () => {
  const [firstName, setFirstName]= useState ("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress]= useState("");
  const [city, setCity]=useState("");
  const [order, setOrder] =useState("");
  const orderSizes= ["1-2", "3-4", "4-6", "6+"];
  const [GlutenFree, setGlutenFree] =useState("");
  const [SugarFree, setSugarFree] =useState("");
  const [ShowSummary, setShowSummary] =useState("");
  const [section, setSection] = useState ("firstQuestion");


const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
    };


  return (
    <div className="App">
     
{!ShowSummary ? (
  <form onSubmit= {handleSubmit}>
    {section === "firstQuestion" && ( 
        
      <section className ="section-div">
        <h1 className="welcome-txt">Register here to order home made bread straight to your door</h1>
        <button className="submit-button" type="submit"   
          onClick={event => setSection ("firstname")}>register
        </button>
      </section>
    )}
    
      {/* First Question : Name info */}
   {section === "firstname" && (
     <div className="section-div">
      <fieldset>
        <legend>Your name please:</legend>
        <FirstName firstName={firstName} setFirstName={setFirstName}/>
        <SecondName secondName={secondName} setSecondName={setSecondName}/>    
        <button className="submit-button" type="submit"  disabled={firstName === ""}  
          onClick={event => setSection ("email")}
          >Submit</button>
      </fieldset>
    </div>
    )}

      {/* Second section: Email */}
    {section === "email" && (
      <div className="section-div">
        <fieldset>
          <legend>Can we have your email, its only for friendly confirmations - no spam!</legend>
          <Email email={email} setEmail={setEmail}/>
          <button className="submit-button" type="submit"  disabled={email=== ""}  
            onClick={event => setSection ("adress")}
          >Submit</button>
        </fieldset>
      </div>
    )}

      {/* Third section: Adress for delivery */}
    { section === "adress" && (
      <div className="section-div">
        <fieldset>
          <legend>Where do you live? We will connect you with your local bakery.</legend>
          <Location adress={adress} setAdress ={setAdress} city={city} setCity={setCity}/>
          <button className="submit-button" type="submit"  disabled={adress=== ""}  
            onClick={event => setSection ("order")}
          >Submit</button>
        </fieldset>  
      </div>
    )}

     {/* Fourth section: Order size */}
    { section === "order"&& (
     <div fieldset  className="section-div">
        <fieldset>
         <h4 className="OrderQ">How many are we baking for?</h4><button className="submit-button" type="submit"  disabled={order=== ""}  
          onClick={event => setSection ("specials")}
         >Submit</button>
          <legend>How many are we baking for?</legend>
          <OrderSize order={order} setOrder={setOrder} orderSizes={orderSizes}/>
        </fieldset> 
      </div>
  )}

 {/* Fifth section: Special requests */}
 {section === "specials" &&(
   <div className="section-div">
    <fieldset>
      <Specials GlutenFree={GlutenFree} setGlutenFree={setGlutenFree} SugarFree={SugarFree} setSugarFree={setSugarFree}/>
      <button className="submit-button" type="submit"   
      onClick={event => setSection ("submit")}
      >Submit</button>
    </fieldset>  
  </div>
  )}
  {section === "submit"&&(
    <div className="section-div">
      <fieldset className="Submit-button" id="Submit">
       <Submit />
      </fieldset>
    </div>
    )}
      </form>
 ) : (
    <article className="ShowSummary section-div">
      <Summary firstName={firstName} email={email} city={city} adress={adress} SugarFree={SugarFree} GlutenFree={GlutenFree}/>
    </article>
      )}
  </div> 
  )
}

