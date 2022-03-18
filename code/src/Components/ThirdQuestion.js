import React from "react";

const ThirdQuestion = ({
    where, 
    onWhereChange,
    onStepChange,

}) => {
    return (
        <div className="main">
        <div className="container">
        <h2>Var tycker du att vi ska äta?</h2>
        <form>
            <label className="label2">
                Hemma hos mig
                <input className="radiobutton" 
                type="radio" 
                value="Hemma hos mig"
                onChange={onWhereChange}
                checked={where === 'Hemma hos mig'}
                id='Hemma hos mig'
            />
             </label>

              <label className="label2">
                Hemma hos någon annan
                <input 
                type="radio" 
                value="Hemma hos någon annan"
                onChange={onWhereChange}
                checked={where === 'Hemma hos någon annan'}
            />
               </label>
               <label className="label2">
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
        </div>
        </div>
    );
};
    
export default ThirdQuestion;