import React from "react";
import './ThirdQuestion.css'

const ThirdQuestion = ({
    where, 
    onWhereChange,
    onStepChange,

}) => {
    return (
        <form>
            <label>
                <input 
                type="radio" 
                value="Hemma hos mig"
                onChange={() => onWhereChange('Hemma hos mig')}
                checked={where === 'Hemma hos mig'}
            />
             </label>

              <label>
                <input 
                type="radio" 
                value="Hemma hos någon annan"
                onChange={() => onWhereChange('Hemma hos någon annan')}
                checked={where === 'Hemma hos någon annan'}
            />
               </label>
               <label>
                <input 
                type="radio" 
                value="På restaurang"
                onChange={() => onWhereChange('På restaurang')}
                checked={where === 'På restaurang'}
           />
              </label>
            <button onClick= {onStepChange}>Se summering</button>
        </form>
    );
};
    
export default ThirdQuestion;