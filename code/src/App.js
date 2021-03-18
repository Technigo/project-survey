import React, { useState } from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import SurveyRadio from './Components/SurveyRadio.js';
import Summary from './Components/Summary.js';
import SurveySelect from './Components/SurveySelect.js';
//import SurveyCheckbox from './Components/SurveyCheckbox.js';
//import Survey from './Components/Survey.js';
//import FormAnswers from './Components/FormAnswers.js';
import SurveyText from './Components/SurveyText.js';


export const App = () => {
  const [showSummary, setshowSummary]=useState(false);
  const [showForm, setshowForm]=useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  
  const [buildstyle, setBuildstyle] = useState("");

    const handleSubmit = event => {
      event.preventDefault();
      setshowSummary(true);
      setshowForm(false);
    }

    return (
     <>
      <Header />
      
      <div className="content">
      
        
         {showForm &&
        <form className="form-entire" onSubmit={handleSubmit}>
          <div className="survey-intro-text">
          <p> Our dreams differs and unite. What about our dreamhome? Please take time to answer some questions about your preferable way of living. If you want some inspirational reading based on your answers make sure to fill in your email.  </p>
          </div>
          <div className="survey-complete">
          <SurveyText name={name} setName={setName} email={email} setEmail={setEmail}/>
          <SurveyRadio type={type} setType={setType} />
          
          <SurveySelect buildstyle={buildstyle} setBuildstyle={setBuildstyle} />
          </div>
          <div className="button-container">  
          <button className="submit-button" type="submit">Submit</button>
          </div>

        </form>
}

        
        {showSummary && <Summary name={name} 
            type={type} buildstyle={buildstyle}/>}
           
            </div>
      <Footer />
      
     </>
    )
  }


  /*
  const [type2, setType2] = useState("");
  
  <SurveyCheckbox type2={type2} setType2={setType2} />
  
  type2={type2}
  
  */