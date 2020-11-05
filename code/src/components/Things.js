import React from 'react'

const thing = [
    "broken code",
    "phone number",
    "coupons"
  ]


export const Things = (props) => {
    return (
          <div className="word-container">
        <div className="flip-box">
          <div className="flip-box-inner">
            <div className="flip-box-front">
              <img alt="flipBoxImage" src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
            </div>
            <div className="flip-box-back">
           
      
             <h2>Things</h2>
                {thing.map((group) => (
                  <label key={group} className="control">
                    
                  
                    <input
                      className="control__input visually-hidden"
                      type="radio"
                      value={group}
                      onChange={(event) => props.setThings(event.target.value)} 
                    checked={props.things === group}/>

                      <span className="control__indicator"></span>
                    {group}
                  </label>
                ))}
              
            </div>
          </div>
        </div>
      </div>
    

    )
}



