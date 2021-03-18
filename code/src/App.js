import React, { useState } from 'react';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import SurveyRadio from './Components/SurveyRadio.js';
import Summary from './Components/Summary.js';
import SurveySelect from './Components/SurveySelect.js';
import SurveyCheckbox from './Components/SurveyCheckbox.js';
//import Survey from './Components/Survey.js';
//import FormAnswers from './Components/FormAnswers.js';
import SurveyText from './Components/SurveyText.js';


export const App = () => {
  const [showSummary, setshowSummary]=useState(false);
  const [showForm, setshowForm]=useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [type2, setType2] = useState("");
  const [style, setStyle] = useState("");

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
          <div className="survey-summary">
          <SurveyText name={name} setName={setName} email={email} setEmail={setEmail}/>
          <SurveyRadio type={type} setType={setType} />
          <SurveyCheckbox type2={type2} setType2={setType2} />
          <SurveySelect style={style} setStyle={setStyle} />
          </div>
          <div className="button-container">  
          <button className="submit-button" type="submit">Submit</button>
          </div>

        </form>
        }
        {showSummary && <Summary name={name} type2={type2}
            type={type}/>}
            
      </div> 
      <Footer />
     </>
    )
  }
