import React, { useState } from 'react';

// All components for questions 
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Summary from './components/Summary';



export const App = () => {
// All states for each component
const [name, setName] = useState('');
const [investmentTerm, setInvestmentTerm] = useState('');
const [investmentType, setInvestmentType] = useState();
const [showSummary, setShowSummary] = useState();



// Event Handlers
const handleNameChange = (e) => {
  setName(e.target.value);
}

const handleInvestmentTermChange = (e) => {
  setInvestmentTerm(e.target.value);
}

const handleInvestmentTypeChange = (e) => {
  setInvestmentType(e.target.value);
}

const handleSubmit = event => {
  event.preventDefault();
  setShowSummary(true);
};


  return (
    <>
        <div className="form-container">
        <span className="money-emoji" role="img" aria-label="Money Bag Emoji">💰</span>
        <h1>Welcome to Investor Check  
            <span role="img" aria-label="Checkbox Emoji">✅ </span> 
        </h1>
        <p>Double check your investment goals   
            <span role="img" aria-label="Smile Face Emoji">🤓 </span> 
        </p>
        </div>


        {!showSummary && (
        <form onSubmit={handleSubmit}>

          <Question1 
          username={name} 
          onNameChange={handleNameChange} 
          />


          <Question2
           value={investmentTerm}
           onInvestmentTermChange={handleInvestmentTermChange}
          />

          <Question3
          checked={Question3 === investmentType}
          onInvestmentTypeChange={handleInvestmentTypeChange}
         
          
          />
       
        <button className="submit" type="Submit">Submit</button>

        </form>
    )}

      {showSummary && (
        <Summary name={name} checked={investmentType} value={investmentTerm} />
      )}
    
    
    </>
  )
}
