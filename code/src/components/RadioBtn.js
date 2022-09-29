import React from "react";

export const FavoriteThing = ({NextQuestion, backCounter, Flavour, onFlavour}) => {
    return (
        
        <div className="container">

            <div className="flavour-container">
              <h2 className="heading-icecream"> Which falvour do you want to order?  </h2>
                  <article className="icecream1">
                      <p>Strawberry </p>
                      <input
                      type="radio"
                      name="choice"
                      onChange={onFlavour}
                      checked={Flavour === "Strawberry"}
                      value="Strawberry"
                      />
                     </article> 
                 
                     <article className="icecream2">
                      <p>Vanilla</p>
                      <input
                      type="radio"
                      name="choice2"
                      onChange={onFlavour}
                      checked={Flavour === "Vanilla"}
                      value="Vanilla"
                    
                      />
                      </article>

                  <article className="icecream3">
                    <p>Chocolate</p>
                    <input
                      type="radio"
                      name="choice3"
                      onChange={onFlavour}
                      checked={Flavour === "Chocolate"}
                      value="Chocolate"
                      />
                    </article>

                    <article className="icecream4">
                    <p>Mango</p>  
                    <input
                      type="radio"
                      name="choice4"
                      onChange={onFlavour}
                      checked={Flavour === "Mango"}
                      value="Mango"
                      />
                      </article>
                      
                      
                      </div>
                     
           
              
          <div className="btn-container">
            <button type="button" onClick={NextQuestion} className="button"> Next </button>
            <button type="button" onClick={backCounter} className="button"> Back</button>
            </div>
            </div>
            
            )
    }