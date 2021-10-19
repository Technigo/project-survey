import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const FourthQuestion = ({ selected, onSelect, onStepChange }) => {
    return (
        <>
    <label className="custom-input-label">Choose date</label>

            <DatePicker selected={selected} onChange={(date) => onSelect(date)} 
            />       
        </>
        );
  };
  
export default FourthQuestion;
