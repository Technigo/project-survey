import React from 'react';

const Question2 = ({investmentTerm, onInvestmentTermChange}) => {

    
    return (
        <div className="form-container">
                        
        <label htmlFor="investmentTerm">Investment Term: </label>
        <select 
                    id="investmentTerm"
                    value={investmentTerm}
                    onChange={(e) => onInvestmentTermChange(e)}
                    required
                >
                    <option value="">Select Investment Term:</option>
                    <option value="Long">Long</option>
                    <option value="Medium">Medium</option>
                    <option value="Short">Short</option>
                </select>
        </div>
    )
}

export default Question2;