import React from 'react'

const costumeOne = [
  "Sponge Bob",
  " Scooby Doo",
  "E.T"
]

export const CostumeOne = (props) => {
  return (
    <div className="word-container">
      <div className="flip-box">
        <div className="flip-box-inner">
          <div className="flip-box-front">
            <img alt="flipBoxImage" src="https://cdn.pixabay.com/photo/2020/09/28/12/45/pumpkin-5609713_1280.jpg" />
          </div>
          <div className="flip-box-back">

            <h2>Costume</h2>
            {costumeOne.map((group) => (
              <label key={group} >


                <input
                  type="checkbox"
                  value={group}
                  onChange={(event) => props.setCostumeOne(event.target.value)}
                  checked={props.costumeOne === group} />

                {group}
              </label>
            ))}


          </div>
        </div>
      </div>
    </div>

  )
}
