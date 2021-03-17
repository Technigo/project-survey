import React, { useState } from 'react';


const investmentTypes = [ "Gold", "Bitcoin", "Silver"];

const Question3 = () => {
    
    const [investment, setInvestment] = useState();

    const onInvestmentChange = (e) => {
        console.log(e.target.value);
        setInvestment(e.target.value);
    }

    return (
        <form>
            <div>
                <p>Preferred Investment:</p>
                 { investmentTypes.map(item => (
                     <label key={item}>
                        <input
                            type="radio"
                            value={item}
                            onChange={onInvestmentChange}
                            checked={investment === item}
                        />
                        {item}
                     </label>
                 ))} 
            </div>
        </form>
    )
}

export default Question3;


