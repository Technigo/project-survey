import React from "react";

export const FavoriteThing = ({NextQuestion, backCounter, SetTest1, test1, onTest1}) => {
    return (
        
        <div className="container">

            <div>
              <label> Lets make a choiche </label>
                      <p>test 1</p>
                      <input
                      type="radio"
                      name="choice"
                      onChange={onTest1}
                      checked={test1 === "test1"}
                      value="test1"
                      />
                 
                      <p>test2</p>
                      <input
                      type="radio"
                      name="choice"
                      onChange={onTest1}
                      checked={test1 === "test2"}
                      value="test2"
                      />

                    <p>test3</p>
                    <input
                      type="radio"
                      name="choice"
                      onChange={onTest1}
                      checked={test1 === "test3"}
                      value="test3"
                      />

<p>test4</p>
                    <input
                      type="radio"
                      name="choice"
                      onChange={onTest1}
                      checked={test1 === "test4"}
                      value="test3"
                      />
                      
                      
                      
                      </div>
                     
           
              
    
            <button type="button" onClick={NextQuestion} className="button"> Next Question </button>
            <button type="button" onClick={backCounter} className="button"> Back</button>
            </div>
            
            )
    }