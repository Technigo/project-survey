import React from 'react';

const Question3 = ( {investmentType, onInvestmentTypeChange} ) => {
 const investmentTypes = [ "Gold", "Bitcoin", "Silver"];

    return (
        <div className="form-container">
                <p>Preferred Investment:</p>
                 { investmentTypes.map(item => (
                     <label key={item}>
                        <input
                            type="radio"
                            name="investmentType"
                            value={item}
                            onChange={(e) => onInvestmentTypeChange(e)}
                            checked={investmentType === item}
                        />
                        {item}
                     </label>
                 ))} 
            </div>
    )
}

export default Question3;


