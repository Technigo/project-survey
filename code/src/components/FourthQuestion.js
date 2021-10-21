import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const FourthQuestion = ({ selected, onSelect }) => {
    return (
        <>
        <div className="date-row">
            
    <label className="custom-input-label">Choose date:</label>
</div>
            <DatePicker placeholderText="Please select a date" selected={selected} onChange={(date) => onSelect(date)} 
            />       
        <div>

<h2 className="quote">"Rememeber! A balanced diet is a cookie in each hand!"</h2>
</div>
        
        </>

        
        
        );
  };
  
  
export default FourthQuestion;
