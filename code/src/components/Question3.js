import React from 'react';

const Question3 = ( {onInvestmentTypeChange} ) => {
 const investmentTypes = [ "Gold", "Bitcoin", "Silver"];

    return (
        <>       
        <p>Preferred Investment:</p>
                 { investmentTypes.map(item => (
                     <label key={item}>
                        <input
                            type="radio"
                            name="investmentType"
                            value={item}
                            onChange={(e) => onInvestmentTypeChange(e)}
                            required
                        />
                        {item}
                     </label>
                 ))} 
        </>
    )
}

export default Question3;


