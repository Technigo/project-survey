import React from 'react'


    const answers = [
      "Yep! Pretty sure.", 
      "Dunno", 
      "Hell yes "
    ]

    export const SureQuestion = ({sure, setSure}) => {

      return (
          <div>
            <h2>Are you sure? </h2>
          <div>
            {answers.map((answer) => (
              <label>
                <input
                  type="radio"
                  value={answer}
                  onChange={(event) => setSure(event.target.value)}
                  checked={sure === answer}
                  />
                  {answer}
              </label>
            ))}
          </div> 
      </div>
      )
    }


    
