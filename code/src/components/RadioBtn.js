import React from "react";

export const FavoriteThing = ({NextQuestion, backCounter, Flavour, onFlavour}) => {
    return (
        
        <div className="container">

            <div className="flavour-container">
              <h2 className="heading-icecream" aria-label="Choose what falvour your want to order"> Which falvour do you want to order?  </h2>
                  <article className="icecream1">
                     <label htmlFor="Strawberry"> <p>Strawberry </p></label>
                      <input
                      type="radio"
                      name="choice"
                      onChange={onFlavour}
                      checked={Flavour === "Strawberry"}
                      value="Strawberry"
                      />
                  </article> 
                 
                  <article className="icecream2">
                    <label htmlFor="Vanilla"><p>Vanilla</p></label>
                    <input
                    type="radio"
                    name="choice2"
                    onChange={onFlavour}
                    checked={Flavour === "Vanilla"}
                    value="Vanilla"
                    />
                  </article>

                  <article className="icecream3">
                    <label htmlFor="Chocolate"><p>Chocolate</p></label>
                    <input
                      type="radio"
                      name="choice3"
                      onChange={onFlavour}
                      checked={Flavour === "Chocolate"}
                      value="Chocolate"
                      />
                  </article>

                  <article className="icecream4">
                    <label htmlFor="Mango"><p>Mango</p></label>
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
            <button type="button" onClick={backCounter} className="button"> Back</button>
            <button type="button" onClick={NextQuestion} className="button"> Next </button>
            
          </div>
        </div>
            
      )
    }