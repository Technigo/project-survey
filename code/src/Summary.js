import React from "react";

import Kitten from "./img/kitten.gif";


const restart = () => {
  document.location.href = "";
};

const Summary = ({ name , ageGroup,  fur,  }) => {
  return ( 
    <>
      <section className="summary-container">
        <div>
          <img className="kitten-gif" src= {Kitten} alt="cat with bouncing tail"/>
        </div>
          <div className ="summary-wrapper"> 
            <p tabIndex ="0"> Your dream cat's name is {name} and it should be a {ageGroup} with {fur} ! </p>   
            <p tabIndex ="0"> PS. we will not give you a cat </p>
              <button
                type ="restart"
                tabIndex="0"
                aria-label="reset the form"
                onClick={restart}>
                Restart
              </button>
          </div> 
      </section>
    </>
  );
};

export default Summary; 