import React from "react";

const ThirdQuestion = ({
    where, 
    onWhereChange,
    onStepChange,

}) => {
    return (
        <form>
            <label>
                Hemma hos mig
                <input className="radiobutton" 
                type="radio" 
                value="Hemma hos mig"
                onChange={onWhereChange}
                checked={where === 'Hemma hos mig'}
                id='Hemma hos mig'
            />
             </label>

              <label>
                Hemma hos någon annan
                <input 
                type="radio" 
                value="Hemma hos någon annan"
                onChange={onWhereChange}
                checked={where === 'Hemma hos någon annan'}
            />
               </label>
               <label>
               På restaurang
                <input 
                type="radio" 
                value="På restaurang"
                onChange={onWhereChange}
                checked={where === 'På restaurang'}
           />
              </label>
            <button onClick= {onStepChange}>Se summering</button>
        </form>
    );
};
    
export default ThirdQuestion;

// onChange={() => onRandomChange('no')} 